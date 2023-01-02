// SvelteKit works best when reading environment variables from a .env file.
// This file reads values from the current environment that start with "ENV_" and writes them to ./.env.
import fs from "fs";
import path from "path";

const env = Object.entries(process.env).reduce((acc, [ key, value ]) => (key.startsWith("ENV_") ? `${acc}${key}=${value}\n` : acc), "");

const outPath = path.join(process.cwd(), ".env");

// eslint-disable-next-line no-console
console.log("Writing to .env");

// eslint-disable-next-line no-console
console.log(env);
 
fs.writeFileSync(outPath, env);
