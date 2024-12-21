import fs from 'fs'
import path from 'path'
const filePath = path.join(__dirname, '../database/quotes.json')

interface Quote {
    id: string;
    text: string;
    author: string;
}

export class QuotesModel {
    // leer frases desde un archivo
    static getAllQuotes(): Quote[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.quotes
    }

    //obtener una frase por id
    static getQuoteById(id: string): Quote | undefined {
        const data = this.getAllQuotes()
        return data.find((quote) => quote.id === id)
    }

    static addQuote(newQuote: Quote): Quote {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const newId = (data.quotes.length + 1).toString()
        const quote = { ...newQuote, id:newId}

        data.quotes.push(quote)
        data.info.total += 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return quote
    }

    static updateQuote(id: string, updateData: Partial<Quote>): Quote | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        if (index === -1) return null
        data.quotes[index] = {...data.quotes[index], ...updateData}
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return data.quotes[index]
    }

    static deleteQuote(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        if (index === -1) return false
        data.quotes.splice(index, 1)
        data.info.total -= 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return true;
    }
}