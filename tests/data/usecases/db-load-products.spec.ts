import { DbLoadProducts } from '@/data/usecases'
import { LoadProductsRepositorySpy } from '@/tests/data/mocks'

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
