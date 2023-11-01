import { ListProduct, ListProducts } from '@/domain/usecases'

import { Product } from '@/domain/models'
import { productListMock } from '@/tests/domain/mocks/products-mocks'

export interface LoadProductsRepository {
  loadAll: () => Promise<LoadProductsRepository.Result>
}

export namespace LoadProductsRepository {
  export type Result = Product[]
}

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result = productListMock()
  async loadAll (): Promise<LoadProductsRepository.Result> {
    return this.result
  }
}

export class DbLoadProducts implements ListProduct {
  constructor (private readonly loadProductsRepository: LoadProductsRepository) {}
  async performs (): Promise<ListProducts.Result> {
    return this.loadProductsRepository.loadAll()
  }
}

type SutTypes = {
  sut: DbLoadProducts
  loadProductsRepositorySpy: LoadProductsRepositorySpy
}
const makeSut = (): SutTypes => {
  const loadProductsRepositorySpy = new LoadProductsRepositorySpy()
  const sut = new DbLoadProducts(loadProductsRepositorySpy)
  return {
    sut,
    loadProductsRepositorySpy
  }
}

describe('DbLoadProducts', () => {
  test('Should return a list of Products on success', async () => {
    const { sut, loadProductsRepositorySpy } = makeSut()
    const products = await sut.performs()
    expect(products).toEqual(loadProductsRepositorySpy.result)
  })
})
