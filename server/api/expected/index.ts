import { ExpectedData } from '$/service/expected'

export type Methods = {
  get: {
    query: {
      price: number
      plan: string
      rule: string
    }
    resBody: {
      results: ExpectedData[]
    }
  }
}
