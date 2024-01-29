import { describe, expect, it } from "vitest";
import User from "../../domain/entity/User";

describe('User', () => {
    it('should create a new User', () => {
        const inputUser = { email: 'any_email@email.com', password: 'any_password', name: 'any_name' }
        const expectedUser = { ...inputUser, userId: 'any_user_id'}
        
        const user = User.create(inputUser);

        expect(user.email).toBe(expectedUser.email)
        expect(user.password).toBe(expectedUser.password)
        expect(user.userId).toBeDefined()
        expect(user.token).toBeDefined()
    })
})