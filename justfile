###########################################################################
# just docs: https://github.com/casey/just
###########################################################################
# just configuration
###########################################################################

set shell := ["bash", "-c"]
set dotenv-load := true

###########################################################################
# Repo configuration
###########################################################################
# Required since the entire repo is from notion

NOTION_TOKEN := env_var_or_default("NOTION_TOKEN", "")

# This package is patched to reduce the rate limit

DOCU_NOTION := "node --max-http-header-size 500000 node_modules/@sillsdev/docu-notion/dist/index.js"

###########################################################################
# Formatting output
###########################################################################

bold := '\033[1m'
normal := '\033[0m'
green := "\\e[32m"
yellow := "\\e[33m"
blue := "\\e[34m"
magenta := "\\e[35m"
grey := "\\e[90m"

###########################################################################
# Begin commands

# ##########################################################################
_help:
    #!/usr/bin/env -S bash
    echo -e ""
    just --list --unsorted --list-heading $'📚 Commands:\n'
    echo -e ""
    echo -e "      Github  URL 🔗 {{ green }}$(cat package.json | jq -r '.repository.url'){{ normal }}"
    echo -e "      Publish URL 🔗 {{ green }}$(cat package.json | jq -r '.homepage'){{ normal }}"
    echo -e ""

# Starts the development server.
dev: install _dev

# Open the the locally running stack in your browser
open:
    open http://localhost:3000

# Starts the development server, but without refetching notion.
@_dev:
    pnpm start

# Bundles your website into static files for production. NB: no notion fetch here
build: install _build

@_build:
    pnpm build

# Bundles your website into static files for production. NB: no notion fetch here
@generate_and_build: install generate _build

# Serves the built website locally.
@serve: install generate
    pnpm serve

# Publishes the website to GitHub pages.
@deploy:
    echo -e "👀 deployments occur every half hour, creating a PR if the notion pages have changed. See .github/workflows/deploy.yml"

# Calls `generate-from-notion-blog`. Called by `[dev|build|serve|deploy]`
generate: install (generate-from-notion-blog "") _add-author _extract-og-data
    echo -e "✅ generated from notion"

# Build blog from notion https://github.com/sillsdev/docu-notion
@generate-from-notion-blog +args="--log-level=verbose": _require_NOTION_TOKEN && (_truncate_after_END_PAGE "blog") (_highlight_self_in_mermaid "blog") (_replace_img_with_markdown "blog")
    mkdir -p blog
    rm -rf blog/*
    {{ DOCU_NOTION }} --notion-token {{ NOTION_TOKEN }} --root-page b617023dad3d4fe6a4ffafabc77f54a7 --status-tag '*' --markdown-output-path $(pwd)/blog {{ args }}
    cp src/authors.yml blog/
    echo -e "✅ generated blog from notion"

install +args="":
    pnpm i {{ args }}

_add-author: _cp-authors-yml
    #!/usr/bin/env -S deno run --allow-read={{ justfile_directory() }} --allow-write={{ justfile_directory() }}
    import { applyFrontMatterModificationToAll, addAuthorToFrontMatter } from "{{ justfile_directory() }}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "./blog", f: (frontMatter) => {
        return addAuthorToFrontMatter("dion", frontMatter);
    }});
    console.log("👍 added author to blog posts")

_extract-og-data:
    #!/usr/bin/env -S deno run --allow-read={{ justfile_directory() }} --allow-write={{ justfile_directory() }}
    import { extractOgDataToFrontMatterAll } from "{{ justfile_directory() }}/post-processing-scripts/mod.ts";
    await extractOgDataToFrontMatterAll({ path: "./blog" });
    console.log("👍 extracted OG data (image/description) for blog posts")

@_cp-authors-yml:
    cp src/authors.yml blog/

# If the document is linked in a mermaid diagram, apply a class to the element
_highlight_self_in_mermaid path:
    #!/usr/bin/env -S deno run --allow-read={{ justfile_directory() }} --allow-write={{ justfile_directory() }}
    import { highlightSelfInMermaidDiagramsAll } from "{{ justfile_directory() }}/post-processing-scripts/mod.ts";
    await highlightSelfInMermaidDiagramsAll({ path: "{{ path }}"});
    console.log("👍 highlighted mermaid self {{ path }}")

@_require_NOTION_TOKEN:
    if [ -z "{{ NOTION_TOKEN }}" ]; then echo "Missing NOTION_TOKEN env var"; exit 1; fi

# Truncate markdown files after END PAGE
_truncate_after_END_PAGE path:
    #!/usr/bin/env -S deno run  --ext=ts --allow-read={{ justfile_directory() }} --allow-write={{ justfile_directory() }}
    import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';
    console.log("Begin truncated markdown files after END PAGE...")
    const path = "{{ path }}";
    const regex = /([Ee][Nn][Dd]\s?[Pp][Aa][Gg][Ee])/;
    async function truncateAfterRegex(filePath: string, regex: RegExp) {
        regex.lastIndex = 0;
        try {
            // Read the file content
            const decoder = new TextDecoder('utf-8');
            const data = await Deno.readFile(filePath);
            const content = decoder.decode(data);

            // Find the match and its index
            const match = content.match(regex);
            if (match) {
                const index = match.index || 0;
                const truncatedContent = content.substring(0, index);

                // Write the truncated content back to the file
                const encoder = new TextEncoder();
                await Deno.writeFile(filePath, encoder.encode(truncatedContent));
                console.log("  ✂️ after END PAGE truncated: " + filePath);
            }
        } catch (error) {
            console.error('Error truncating file:', error);
        }
    }

    const st = await Deno.stat(path);
    if (st.isFile) {
        await truncateAfterRegex(path, regex);
        Deno.exit(0);
    }

    for await (
        const e of walk(path, {
            includeDirs: false,
            exts: [".md", ".mdx"],
        })
    ) {
        if (e.isFile) {
            await truncateAfterRegex(e.path, regex);
        }
    }
    console.log("👍 truncated markdown files after END PAGE")
    Deno.exit(0);

# Replace HTML img tags with markdown image syntax
_replace_img_with_markdown path:
    #!/usr/bin/env -S deno run  --ext=ts --allow-read={{ justfile_directory() }} --allow-write={{ justfile_directory() }}
    import { walk } from 'https://deno.land/std@0.182.0/fs/mod.ts';
    console.log("Begin replacing img with markdown...")
    const path = "{{ path }}";
    const regex = /<img[^>]*?\balt\s*=\s*(['"])([^'"]*)\1[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\3[^>]*>|<img[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\5[^>]*?\balt\s*=\s*(['"])([^'"]*)\7[^>]*>|<img[^>]*?\bsrc\s*=\s*(['"])([^'"]*)\9[^>]*>/mg;
    async function replaceImgWithMarkdown(filePath: string, regex: RegExp) {
        regex.lastIndex = 0;
        try {
            // Read the file content
            const decoder = new TextDecoder('utf-8');
            const data = await Deno.readFile(filePath);
            const content = decoder.decode(data);

            // Replace all img tags with markdown format
            const newContent = content.replaceAll(regex, (match, q1, alt1, q2, src1, q3, src2, q4, alt2, q5, src3) => {
                const alt = alt1 || alt2 || '';
                const src = src1 || src2 || src3;
                if (alt.startsWith("http")) {
                    return `\n[![](${src})](${alt})\n`;
                } else {
                    return `\n![${alt}](${src})\n`;
                }
            });

            if (content !== newContent) {
                // Write the modified content back to the file
                const encoder = new TextEncoder();
                await Deno.writeFile(filePath, encoder.encode(newContent));
                console.log(`  🔄 replaced img tags in: ${filePath}`);
            }
        } catch (error) {
            console.error('Error truncating file:', error);
        }
    }

    const st = await Deno.stat(path);
    if (st.isFile) {
        await truncateAfterRegex(path, regex);
        Deno.exit(0);
    }

    for await (
        const e of walk(path, {
            includeDirs: false,
            exts: [".md", ".mdx"],
        })
    ) {
        if (e.isFile) {
            await replaceImgWithMarkdown(e.path, regex);
        }
    }
    console.log("👍 truncated markdown files after END PAGE")
    Deno.exit(0);
