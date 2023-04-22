import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const PORT = 3080;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log(`Express server is running on http://localhost:${PORT}`));
