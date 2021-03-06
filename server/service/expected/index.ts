export type ExpectedData = {
  date: Date
  kaijyo: string
  price: number
  plusminus: number
  credit: number
}
export const getExpectedData = async ({
  price
}: {
  price: number
}): Promise<ExpectedData[]> => {
  return await new Promise<ExpectedData[]>((resolve) => {
    resolve([
      {
        date: new Date(),
        kaijyo: '住之江10R',
        price: price,
        plusminus: 560,
        credit: 1000
      },
      {
        date: new Date(),
        kaijyo: '住之江11R',
        price: price,
        plusminus: 1560,
        credit: 2000
      },
      {
        date: new Date(),
        kaijyo: '住之江12R',
        price: price,
        plusminus: 2560,
        credit: 3000
      }
    ])
  })
}
