---
title: Justfiles - universal command control
sidebar_position: 1
slug: /one-justfile-to-bind-them-all
---



# justfiles are part of the golden three {#91d4820bc6cc4164b589f63c0590793d}


```mermaid
flowchart LR
    subgraph g [golden three]
        direction LR
        j[justfiles]
        d[deno]
        docker[docker]
        j --> d --> docker --> j
    end

    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4
    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4
    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4
```


## Just Words of Wisdom (To Myself) {#a660199f26954368939f6ff59ee255ae}


### Always include the full path of commands {#d2d23cebe20b4d158daa8400e3cdf9ac}


If you document something with what &lt;command&gt; you should run, e.g.


```bash
# And then you type: 'just <command>'
```


but you are `</over/here>` but you have to be `</somewhere/else>` then please include the full path so there is never any doubt and you don’t have to go `fd`'ing: `'</be/specific> just <command>'`. It doesn’t have to be this exact formula, but try to remove this kind of friction.

