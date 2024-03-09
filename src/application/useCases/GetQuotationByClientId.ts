import Quotation from "../../domain/entity/Quotation";
import { GetAll } from "../repository/Repository.interface";

export default class GetQuotationByClientId {
    constructor(readonly quotationRepository: GetAll<Quotation>){}

    async execute(clientId: string): Promise<Quotation[]>{
        const quotations = await this.quotationRepository.getAll()
        if(!quotations) throw new Error(`No quotation found for client ${clientId}`)
        const quotationsByClient = quotations.filter(quotation => quotation.clientId === clientId)
        return quotationsByClient
    }
}