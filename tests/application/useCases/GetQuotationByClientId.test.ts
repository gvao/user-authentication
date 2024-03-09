import { beforeEach, describe, expect, it } from "vitest"
import GetQuotationByClientId from '../../../src/application/useCases/GetQuotationByClientId'
import QuotationRepositoryInMemory from '../../../src/infra/repositories/QuotationRepositoryInMemory'
import Quotation from "../../../src/domain/entity/Quotation"

describe("GetQuotationByClientId", () => {
    const quotationRepository = new QuotationRepositoryInMemory()
    const getQuotationByClientId = new GetQuotationByClientId(quotationRepository)

    beforeEach(async () => {
        const quotation = await Quotation.create({ clientId: 'any_client_id', destiny: 'any_destiny', endDate: new Date(2024, 3, 12), initialDate: new Date(2024, 3, 16), price: 1000 })
        await quotationRepository.add(quotation)
    })

    it("Get quotation by clientId", async () => {
        const quotations = await getQuotationByClientId.execute('any_client_id')
        expect(quotations).toHaveLength(1)
    })
})