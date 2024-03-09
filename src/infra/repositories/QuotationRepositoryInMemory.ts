import { Add, GetAll } from "../../application/repository/Repository.interface";
import Quotation from "../../domain/entity/Quotation";

export default class QuotationRepositoryInMemory implements IQuotationRepository {
    quotations: Quotation[] = [];
    
    add = async (quotation: Quotation): Promise<void> => {
        this.quotations.push(quotation)
    }
    
    async getAll(): Promise<Quotation[] | null> {
        return this.quotations
    }
}

type IQuotationRepository = GetAll<Quotation> & Add<Quotation>