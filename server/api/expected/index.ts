import { ExpectedData } from '$/service/expected'

export type Methods = {
  get: {
    query: {
      price: number
      plan: 'lte4x' | 'lte6x'
      rule: 'martingale' | 'cocomo'
    }
    resBody: {
      results: ExpectedData[]
    }
  }
}
