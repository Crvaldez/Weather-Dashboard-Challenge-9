import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router, Response } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// TODO: Define route to serve index.html-completed
router.get('/', (req, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

export default router;
