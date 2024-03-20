import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { server } from '../src'
import fetcher from './utils/fetcher'

describe('e2e', () => {

    it('should', async () => {
        const response = await fetcher('/test')
        const json = await response.json()
        expect(json.message).toBe('test')
    })

    afterAll(() => { server.close(() => { console.log('server closed!') }) })
})