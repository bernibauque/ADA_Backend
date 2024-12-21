import { Router } from "express";

import {
    getAllQuotes,
    getQuotesById,
    createQuote,
    updateQuote,
    deleteQuote
} from "../controllers/quotes-controller"

import {validateQuotes} from '../middlewares/validate-middleware'

const router: Router = Router()

router.get('/', getAllQuotes);
router.get('/:id', getQuotesById)
router.post('/', validateQuotes, createQuote)
router.patch('/:id', validateQuotes, updateQuote)
router.delete('/:id', deleteQuote)

export default router;
