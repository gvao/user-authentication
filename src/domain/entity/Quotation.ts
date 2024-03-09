export default class Quotation {
    id: string
    initialDate: Date
    endDate: Date
    destiny: string
    price: number = 0
    clientId: string

    constructor({ initialDate, endDate, destiny, price, id, clientId }: QuotationProps) {
        this.id = id
        this.clientId = clientId
        this.initialDate = initialDate
        this.endDate = endDate
        this.destiny = destiny
        this.price = price
    }

    static async create({ initialDate, endDate, destiny, clientId, price }: QuotationCreateProps) {
        const id = crypto.randomUUID()
        return new Quotation({ id, initialDate, endDate, destiny, price, clientId })
    }

    get dto(): QuotationDto {
        return {
            id: this.id,
            destiny: this.destiny,
            endDate: this.endDate.toUTCString(),
            initialDate: this.initialDate.toUTCString(),
            price: this.price.toString(),
        }
    }
}

export type QuotationCreateProps = {
    price: number,
    initialDate: Date,
    endDate: Date,
    destiny: string,
    clientId: string,
}

type QuotationProps = QuotationCreateProps & {
    id: string,
    price: number,
}

export type QuotationDto = {
    id: string
    initialDate: string
    endDate: string
    destiny: string
    price: string
}