
export default class Client {
    private constructor(
        readonly id: string,
        readonly name: string,
        readonly contact: number,
    ) { }

    static create(name: string, contact: number) {
        const id = crypto.randomUUID()
        return new Client(id, name, contact)
    }

    static load(id: string, name: string, contact: number, ): Client {
        return new Client(id, name, contact, )
    }

    get dto(): ClientDto {
        return {
            contact: String(this.contact),
            id: this.id,
            name: this.name,
        }
    }
}

type ClientDto = {
    id: string,
    name: string,
    contact: string,
}