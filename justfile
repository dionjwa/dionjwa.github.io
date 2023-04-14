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
    #!/usr/bin/env bash
    echo -e ""
    just --list --unsorted --list-heading $'📚 Commands:\n'
    echo -e ""
    echo -e "      Github  URL 🔗 {{green}}$(cat package.json | jq -r '.repository.url'){{normal}}"
    echo -e "      Publish URL 🔗 {{green}}$(cat package.json | jq -r '.homepage'){{normal}}"
    echo -e ""

# Starts the development server.
dev: generate-from-notion _dev

# Starts the development server, but without refetching notion.
@_dev: install
    pnpm start

# Bundles your website into static files for production. NB: no notion fetch here
build: install _build

@_build:
    pnpm build

# Bundles your website into static files for production. NB: no notion fetch here
@generate_and_build: install generate-from-notion _build

# Serves the built website locally.
@serve: install generate-from-notion
  pnpm serve

# Publishes the website to GitHub pages.
@deploy:
    echo -e "👀 deployments occur every half hour, creating a PR if the notion pages have changed. See .github/workflows/deploy.yml"

# Calls `generate-from-notion-docs` & `generate-from-notion-blog`. Called by `[dev|build|serve|deploy]`
generate-from-notion: (generate-from-notion-docs "") (generate-from-notion-blog "")

# Build blog from notion https://github.com/sillsdev/docu-notion
@generate-from-notion-blog +args="--log-level=verbose": _require_NOTION_TOKEN && _remove-code-duplicates
    npx docu-notion@0.11 --notion-token {{NOTION_TOKEN}} --root-page 608a7b08496744579f18698e134fa9db --markdown-output-path $(pwd)/blog {{args}}
    echo -e "✅ generated blog from notion"

# Build main page from notion https://github.com/sillsdev/docu-notion
@generate-from-notion-docs +args="--log-level=verbose": _require_NOTION_TOKEN && _remove-code-duplicates (_remove-right-navigation-selected "docs/About.md") (_hide_title "docs/Resume-List/resume.md") _hide-sidebar-selected
    npx docu-notion@0.11 --notion-token {{NOTION_TOKEN}} --root-page 35fec21b055e460b85c2014f0280db9b --markdown-output-path $(pwd)/docs {{args}}
    echo -e "✅ generated index from notion"

install +args="":
    pnpm i {{args}}

# To work around these issues: https://github.com/souvikinator/notion-to-md/issues/62
@_remove-code-duplicates:
    deno run --allow-read=$(pwd) --allow-write=$(pwd) ./post-processing-scripts/remove-duplicate-code-blocks.ts
    echo -e "👍 removed mermaid duplicates https://github.com/souvikinator/notion-to-md/issues/62"

_add-author:
    #!/usr/bin/env deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, addAuthorToFrontMatter } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "./blog", f: (frontMatter) => {
        return addAuthorToFrontMatter("dion", frontMatter);
    }});
    console.log("👍 added author to blog posts")

_remove-right-navigation-selected path:
    #!/usr/bin/env deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, hideTableOfContents } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return hideTableOfContents(frontMatter);
    }});
    console.log("👍 removed right navigation from {{path}}")

# Add frontmatter that hides the sidebar for the main index
@_hide-sidebar-selected: (_hide-sidebar "docs/Resume-List/resume.md")

_hide-sidebar path:
    #!/usr/bin/env deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, removeSidebar } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return removeSidebar(frontMatter);
    }});
    console.log("👍 removed sidebar from {{path}}")

_hide_title path:
    #!/usr/bin/env deno run --allow-read={{justfile_directory()}} --allow-write={{justfile_directory()}}
    import { applyFrontMatterModificationToAll, hideTitle } from "{{justfile_directory()}}/post-processing-scripts/mod.ts";
    await applyFrontMatterModificationToAll({ path: "{{path}}", f: (frontMatter) => {
        return hideTitle(frontMatter);
    }});
    console.log("👍 removed title from {{path}}")

@_require_NOTION_TOKEN:
	if [ -z "{{NOTION_TOKEN}}" ]; then echo "Missing NOTION_TOKEN env var"; exit 1; fi
