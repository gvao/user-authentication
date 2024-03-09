import { describe, expect, it } from "vitest";

import Client from '../../../src/domain/entity/Client'
import Quotation from "../../../src/domain/Quotation";

describe('Client entity', () => {
    const client = Client.create('any_name', 85992915328)
    const idClient = client.id

    it('create client', () => {
        expect(client).instanceOf(Client)
        expect(client.id).toBeDefined()
        expect(client.name).toBe('any_name')
        expect(client.contact).toBe(85992915328)
    })

    it('load client existent', () => {
        const clientLoaded = Client.load(idClient, 'any_name', 85983938474)
        expect(clientLoaded.id).toBe(idClient)
    })

})