import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { PORT } from "./config.js";
import type { Store } from "./store.js";
import type { Tracker } from "./tracker.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

export function startServer(tracker: Tracker, store: Store): void {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    const send = (code: number, type: string, body: string | Buffer) => {
      res.writeHead(code, {
        "Content-Type": type,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      });
      res.end(body);
    };
    const json = (obj: unknown) =>
      send(200, "application/json", JSON.stringify(obj));

    try {
      if (url.pathname === "/api/state") {
        return json(tracker.current);
      }
      if (url.pathname === "/api/history") {
        const coin = url.searchParams.get("coin");
        const hours = Number(url.searchParams.get("hours") ?? 72);
        if (!coin) return json([]);
        return json(store.history(coin, Date.now() - hours * 3600_000));
      }
      if (url.pathname === "/api/closed") {
        return json(store.closedLog());
      }
      // static
      const file = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
      const safe = join(PUBLIC, file).startsWith(PUBLIC) ? file : "index.html";
      const buf = await readFile(join(PUBLIC, safe));
      const type = safe.endsWith(".html")
        ? "text/html"
        : safe.endsWith(".js")
          ? "text/javascript"
          : "application/octet-stream";
      return send(200, type, buf);
    } catch {
      return send(404, "text/plain", "not found");
    }
  });
  server.listen(PORT, () => console.log(`[underpod] dash on :${PORT}`));
}
