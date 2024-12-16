import express from "express";
import { createUser, userLogin } from '../Controller/createUser.js';

import { getProducts, getProductById } from '../Controller/product-controller.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;