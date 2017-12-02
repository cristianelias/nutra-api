import express from 'express';

const router = express.Router();

import {
 search,
 create,
 read,
 update,
 destroy
} from '../controllers/foods';

router.get('/', search);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', destroy);
router.get('/:id', read);

export default router;
