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
_dev:
    pnpm install
    pnpm start

# Bundles your website into static files for production. NB: no notion fetch here
build:
    pnpm install
    pnpm build

# Serves the built website locally.
serve: generate-from-notion
  pnpm serve

# Publishes the website to GitHub pages.
@deploy:
    echo -e "👀 deployments occur every half hour, creating a PR if the notion pages have changed. See .github/workflows/deploy.yml"

# Generate docs from notion. Called automatically by `just [dev|build|serve|deploy]`
generate-from-notion: _docu-notion-blog _docu-notion-index

install +args="":
    pnpm i {{args}}

# Build blog from notion https://github.com/sillsdev/docu-notion
@_docu-notion-blog +args="": _require_NOTION_TOKEN && _remove-code-duplicates
    NOTION_LINK_PREFIX=blog npx docu-notion@0.11 --notion-token {{NOTION_TOKEN}} --root-page 608a7b08496744579f18698e134fa9db --markdown-output-path $(pwd)/blog {{args}}
    echo -e "✅ generated blog from notion"

# Build main page from notion https://github.com/sillsdev/docu-notion
@_docu-notion-index +args="": _require_NOTION_TOKEN && _remove-code-duplicates _hide-sidebar _remove-right-navigation
    npx docu-notion@0.11 --notion-token {{NOTION_TOKEN}} --root-page 35fec21b055e460b85c2014f0280db9b --markdown-output-path $(pwd)/docs {{args}}
    echo -e "✅ generated index from notion"

# To work around these issues: https://github.com/souvikinator/notion-to-md/issues/62
@_remove-code-duplicates:
    # deno run --allow-read=$(pwd) --allow-write=$(pwd) https://github.com/metapages/deno/raw/main/deno/misc-unsorted/remove-duplicate-code-blocks.ts
    # echo -e "✅ removed mermaid duplicates https://github.com/souvikinator/notion-to-md/issues/62"

@_add-author:
    deno run --allow-read=$(pwd) --allow-write=$(pwd) ./post-processing-scripts/add-author.ts

@_remove-right-navigation:
    deno run --allow-read=$(pwd) --allow-write=$(pwd) ./post-processing-scripts/remove-right-navigation.ts

# Add frontmatter that hides the sidebar for the main index
@_hide-sidebar:
    sed -i'' 's/^title:/displayed_sidebar: null\ntitle:/g' docs/index.md
    echo -e "✅ added front matter to hide sidebar"

@_require_NOTION_TOKEN:
	if [ -z "{{NOTION_TOKEN}}" ]; then echo "Missing NOTION_TOKEN env var"; exit 1; fi
