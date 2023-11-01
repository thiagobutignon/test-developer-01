import { DbLoadProducts } from '@/data/usecases'
import { LoadProductsRepository } from '@/data/protocols'
import { productListMock } from '@/tests/domain/mocks/products-mocks'

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result = productListMock()
  async loadAll (): Promise<LoadProductsRepository.Result> {
    return this.result
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
