import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function () {
  const configPath = join(__dirname, '..', '..', 'site.config.json');
  try {
    const raw = readFileSync(configPath, 'utf-8');
    const config = JSON.parse(raw);
    return {
      theme: config.theme || 'trackur',
      themeDevMode: config.themeDevMode === true
    };
  } catch {
    return {
      theme: 'trackur',
      themeDevMode: false
    };
  }
}
