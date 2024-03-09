import { describe, expect, it } from "vitest";
import Quotation from "../../../src/domain/entity/Quotation";

describe('Quotation', () => {

    it('Create a new Quotation', async () => {
        const quotation = await Quotation.create({ clientId: 'any_clientId', destiny: 'any_destiny', endDate: new Date(2024, 3, 12), initialDate: new Date(2024, 3, 16), price: 1000 })

        expect(quotation.id).toBeDefined()
        expect(quotation.clientId).toBeDefined()
        expect(quotation.price).toBe(1000)
        expect(quotation.destiny).toBe("any_destiny")
        expect(quotation.initialDate).toBeInstanceOf(Date)
        expect(quotation.endDate).toBeInstanceOf(Date)
    })
})