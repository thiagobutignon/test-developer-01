import { Product } from '../models'
import { faker } from '@faker-js/faker'

export const productMock = (): Product => ({
  key: faker.string.uuid(),
  priceDate: faker.date.anytime(),
  productCode: faker.number.int(),
  sku: faker.commerce.isbn(),
  stockQuantity: faker.number.int(),
  discount: faker.number.int(),
  insertDateAndTime: faker.date.anytime(),
  initialDate: faker.date.anytime(),
  finalDate: faker.date.anytime()
})

export const productListMock = (): Product[] => (
  [productMock(), productMock(), productMock()]
)
