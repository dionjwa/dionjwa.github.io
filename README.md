# Website

This website is built from documents in [notion](https://notion.so), and generated using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You just write your blogs/docs/whateve in notion, and that's it. Your content is automatically deployed and published every 30 minutes or so (configurable).

Requirements for local development:

 - `just`: https://github.com/casey/just
 - `deno`: https://deno.land/
 - `node+npm`

### Local Development

```
just dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
just build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
just deploy
```
