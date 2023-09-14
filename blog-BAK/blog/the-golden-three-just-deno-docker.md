---
title: The golden trifecta- justfiles, deno, and docker
sidebar_position: 4
slug: /the-golden-three-just-deno-docker
---



```mermaid
flowchart LR
    subgraph g [golden three]
        direction LR
        j[justfiles]
        d[deno]
        docker[docker]
        j --> d --> docker --> j
    end
  click j "/one-justfile-to-bind-them-all"
  click d "/deno-and-tool-ecosystems"
  click docker "/docker-wasm-web-containers"
```



