<div align="center">

<img src="https://s3.login.no/beehive/img/logo/logo-white-small.svg" alt="Login logo" width="80" height="80" />

<h1>Utilbee</h1>

<p>
  <img src="https://img.shields.io/badge/TypeScript-fd8738?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bun-fd8738?style=flat-square&logo=bun&logoColor=white" alt="Bun" />
</p>

</div>

---

Utilbee is the shared utility library for Login projects. It provides common helpers for environment loading, cookies, Discord integration, SQL, and server utilities used across Beehive, QueenBee, Internal, and other services.

## Getting Started

```bash
bun install
bun run build
```

## Project Structure

- `src/utils/env/` - Environment variable loading
- `src/utils/cookies/` - Cookie helpers
- `src/utils/discord/` - Discord utilities
- `src/utils/sql/` - SQL helpers
- `src/server.ts` - Server utilities
- `src/types/` - Shared TypeScript type definitions
