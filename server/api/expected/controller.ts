import { defineController } from './$relay'
import { getExpectedData } from '$/service/expected'

export default defineController(() => ({
  get: async ({ query }) => {
    const results = await getExpectedData(query)
    return {
      status: 200,
      body: {
        results: results
      }
    }
  }
}))
