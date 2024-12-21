import {Request, Response} from 'express'
import {QuotesModel} from '../models/quotes-model'

export const getAllQuotes = (req: Request, res: Response): void => {
    const quotes = QuotesModel.getAllQuotes()
    res.json(quotes)
}

export const getQuotesById = (req: Request, res: Response): void => {
    const {id} = req.params
    const quote = QuotesModel.getQuoteById(id)
    if (!quote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(quote)
}

export const createQuote = (req: Request, res: Response): void => {
    const newQuote = QuotesModel.addQuote(req.body)
    res.status(201).json(newQuote)
}

export const updateQuote = (req: Request, res: Response): void => {
    const {id} = req.params
    const updateQuote = QuotesModel.updateQuote(id, req.body)
    if (!updateQuote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(updateQuote)
}

export const deleteQuote = (req: Request, res: Response): void => {
    const {id} = req.params
    const isDeleted = QuotesModel.deleteQuote(id)
    if (!deleteQuote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.status(204).send()
}