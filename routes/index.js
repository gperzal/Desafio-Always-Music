// routes/index.js

import express from 'express';
import estudiantesRoutes from './estudiantes.js';

const router = express.Router();
router.use('/api', estudiantesRoutes);


export default router;
