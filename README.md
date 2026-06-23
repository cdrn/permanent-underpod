# permanent underpod

> An AI rolls a random perp on Hyperliquid and we watch it drown — live, on the podcast.

A featherweight, read-only tracker + **Underwater-o-meter** dashboard for a single
Hyperliquid perp position. Built for the *Permanent Underpod* bit: roll a random
asset / direction / leverage on air, fire it, and track PnL, funding bleed,
time-alive, and distance-to-liquidation for the rest of the show (and across episodes).

## The sigil angle

The trading key is held by [**sigil**](https://github.com/cdrn/sigil). The position is opened
through a Hyperliquid **API/agent wallet** that has *trade-only* permission — it
**physically cannot withdraw funds**. So we can hand an AI live trading keys on air
and it cannot rug the show. That's the whole story, and it's literally true.

This repo is the **read side** only — no keys, no signing. Order placement is a
separate step driven by sigil (`sigil_eth_sign_typed_data` over Hyperliquid's
EIP-712 action) — see `EXECUTION.md` (TODO) once wired.

## Run locally

```bash
npm install
cp .env.example .env      # set UNDERPOD_WALLET to the tracked address
npm run dev               # dash on http://localhost:4749
```

It works against any wallet with an open Hyperliquid position — point it at your
own to see it light up before show day.

## Architecture

- `src/hyperliquid.ts` — read client for HL's public `/info` (`clearinghouseState`, `metaAndAssetCtxs`).
- `src/tracker.ts` — poll loop; derives side / PnL / ROI / liq distance / drown% / funding bleed.
- `src/store.ts` — SQLite: snapshot history (PnL chart), open-position registry, closed-position saga log.
- `src/server.ts` — static dash + `/api/state`, `/api/history`, `/api/closed`.
- `public/index.html` — the Underwater-o-meter.

## Deploy (existing backdraft droplet)

Runs as its own container alongside delta/funding. Add a Caddy vhost reverse-proxying
`127.0.0.1:4749`, then `docker compose up -d`. Featherweight — a poll loop + static
page, nothing that strains the 1GB box.
