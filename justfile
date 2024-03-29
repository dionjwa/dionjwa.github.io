###########################################################################
# just docs: https://github.com/casey/just
###########################################################################
# just configuration
###########################################################################
set shell                           := ["bash", "-c"]
set dotenv-load                     := true
###########################################################################
# Repo configuration
###########################################################################
# Required since the entire repo is from notion
NOTION_TOKEN                        := env_var_or_default("NOTION_TOKEN", "")
# This package is patched to reduce the rate limit
DOCU_NOTION                         := "node --max-http-header-size 500000 node_modules/@sillsdev/docu-notion/dist/index.js"
###########################################################################
# Formatting output
###########################################################################
bold                               := '\033[1m'
normal                             := '\033[0m'
green                              := "\\e[32m"
yellow                             := "\\e[33m"
blue                               := "\\e[34m"
magenta                            := "\\e[35m"
grey                               := "\\e[90m"
###########################################################################
# Begin commands
###########################################################################
_help:
    #!/usr/bin/env -S bash
    echo -e ""
    just --list --unsorted --list-heading $'📚 Commands:\n'
    echo -e ""
    echo -e "      Github  URL 🔗 {{green}}$(cat package.json | jq -r '.repository.url'){{normal}}"
    echo -e "      Publish URL 🔗 {{green}}$(cat package.json | jq -r '.homepage'){{normal}}"
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

# Calls `generate-from-notion-docs` & `generate-from-notion-blog`. Called by `[dev|build|serve|deploy]`
generate: install (generate-from-notion-docs "") (generate-from-notion-blog "") _add-author
    echo -e "✅ generated from notion"

# Build blog from notion https://github.com/sillsdev/docu-notion
@generate-from-notion-blog +args="--log-level=verbose": _require_NOTION_TOKEN
    mkdir -p blog
    rm -rf blog/*
    {{DOCU_NOTION}} --notion-token {{NOTION_TOKEN}} --root-page b617023dad3d4fe6a4ffafabc77f54a7 --status-tag '*' --markdown-output-path $(pwd)/blog {{args}}
    echo -e "✅ generated blog from notion"

# Build main page from notion https://github.com/sillsdev/docu-notion
@generate-from-notion-docs +args="--log-level=verbose": _require_NOTION_TOKEN && (_remove-right-navigation-selected "docs/Who-I-am.md") (_hide_title "docs/Resume-List/resume.md") _hide-sidebar-selected (_highlight_self_in_mermaid "docs")
    mkdir -p docs
    rm -rf docs/*
    {{DOCU_NOTION}} --notion-token {{NOTION_TOKEN}} --root-page 41e74151aa404755b9b9220cf841dd75 --status-tag '*' --markdown-output-path $(pwd)/docs {{args}}
    echo -e "✅ generated index from notion"

install +args="":
    pnpm i {{args}}

_add-author: _cp-authors-yml
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, addAuthorToFrontMatter } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "./blog", f: (frontMatter) => {
        return addAuthorToFrontMatter("dion", frontMatter);
    }});
    console.log("👍 added author to blog posts")
    
@_cp-authors-yml:
    cp src/authors.yml blog/

_remove-right-navigation-selected path:
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, hideTableOfContents } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return hideTableOfContents(frontMatter);
    }});
    console.log("👍 removed right navigation from {{path}}")

# Add frontmatter that hides the sidebar for the main index
@_hide-sidebar-selected: (_hide-sidebar "docs/Resume-List/resume.md")

_hide-sidebar path:
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, removeSidebar } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return removeSidebar(frontMatter);
    }});
    console.log("👍 removed sidebar from {{path}}")

_hide_title path:
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, hideTitle } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return hideTitle(frontMatter);
    }});
    console.log("👍 removed title from {{path}}")

# If the document is linked in a mermaid diagram, apply a class to the element
_highlight_self_in_mermaid path:
    #!/usr/bin/env -S deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { highlightSelfInMermaidDiagramsAll } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await highlightSelfInMermaidDiagramsAll({ path: "{{path}}"});
    console.log("👍 highlighted mermaid self {{path}}")

@_require_NOTION_TOKEN:
	if [ -z "{{NOTION_TOKEN}}" ]; then echo "Missing NOTION_TOKEN env var"; exit 1; fi
