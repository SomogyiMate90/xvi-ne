import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {onRequest} from "firebase-functions/v2/https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let finalHtml = "This resource is permanently removed.";
finalHtml += "*** Az oldal végleg eltávolításra került ***";

try {
  const templatePath = path.join(__dirname, "..", "templates", "410.html");
  finalHtml = fs.readFileSync(templatePath, "utf8");
} catch (err) {
  console.error("Nem sikerült a fájlbeolvasás indításkor:", err.message);
}

/**
 * @description Blokkolja a robotokat, amelyek nem releváns
 * oldalakat akarnak megtekinteni.
*
* @param {Object} req - A kérés objektuma.
* @param {Object} res - Az adott válasz objektuma.
*/
export const blockRobots = onRequest(
    {
      region: "europe-central2",
      invoker: "public",
      memory: "256MiB",
      timeoutSeconds: 30,
    },
    async (req, res) => {
      console.info("Bot részletes adatai:", {
        ip: req.ip || req.get("x-forwarded-for"),
        url: req.originalUrl,
        ua: req.get("User-Agent"),
        ref: req.get("Referer"),
        lang: req.get("Accept-Language"),
        method: req.method,
        all_cookies: req.get("cookie"),
      });

      res.status(410).send(finalHtml);
    },
);
