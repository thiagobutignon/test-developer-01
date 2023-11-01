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
    // Arrange
    const { sut, loadProductsRepositorySpy } = makeSut()
    // Act
    const products = await sut.performs()
    // Assert
    expect(products).toEqual(loadProductsRepositorySpy.result)
  })

  test('Should throw if LoadProductsRepository throws', async () => {
    const { sut, loadProductsRepositorySpy } = makeSut()
    jest.spyOn(loadProductsRepositorySpy, 'loadAll').mockImplementationOnce(() => { throw new Error() })

    const promise = sut.performs()

    await expect(promise).rejects.toThrow()
  })
})
