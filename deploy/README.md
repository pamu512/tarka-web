# Public Tarka demo (live sandbox)

This folder documents how to run the **lite** Docker stack from the canonical repo behind HTTPS so you can set `PUBLIC_DEMO_URL` on the marketing site.

**Canonical repo:** https://github.com/pamu512/tarka

## What you get (lite stack)

- Frontend: port **3000**
- Decision API: **8000** (`/v1/health`)
- Integration ingress (OSINT): **8003**

See upstream: [sandbox-five-minute.md](https://github.com/pamu512/tarka/blob/master/docs/docs/guides/sandbox-five-minute.md) and `deploy/docker-compose.lite.yml`.

## Quick start on a VPS

1. **Server:** Ubuntu LTS (or similar) with Docker Engine + Compose plugin.
2. **Clone and start:**

   ```bash
   git clone https://github.com/pamu512/tarka.git
   cd tarka
   docker compose -f deploy/docker-compose.lite.yml up -d --build
   ```

3. **TLS:** Put a reverse proxy in front (see `Caddyfile.example`). Point DNS `demo.yourdomain.com` at the server.
4. **Firewall:** Allow `80`/`443` only; do not expose Postgres/Redis to the public internet (compose binds them for localhost by default—verify with `docker port`).

## Hardening checklist

| Item | Notes |
|------|--------|
| Rate limiting | Caddy `rate_limit` or Cloudflare / nginx `limit_req` in front of `:443` |
| Resource caps | `deploy.resources` in compose or systemd/cgroup limits on the host |
| Banner | Optional UI banner: shared demo; data may reset (implement in Tarka frontend fork or proxy-injected header if you control HTML) |
| Secrets | Never commit `.env` with production secrets; rotate if leaked |
| Embedding | If the marketing site iframes the demo, configure `Content-Security-Policy` / `frame-ancestors` on the demo origin to allow only your marketing domain |

## Stable URL for the marketing site

After HTTPS works, set:

```bash
PUBLIC_DEMO_URL=https://demo.yourdomain.com
PUBLIC_SITE_URL=https://www.yourdomain.com
```

in Vercel/Netlify (or `.env` locally) for the Astro project—see the website root [`README.md`](../README.md).

## Prebuilt sandbox image (optional)

Upstream documents:

```bash
docker compose -f https://raw.githubusercontent.com/pamu512/tarka/master/deploy/docker-compose.sandbox.yml up -d
```

Use this if you prefer not to build images on the server.
