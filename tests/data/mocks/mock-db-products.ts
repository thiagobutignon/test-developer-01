import { LoadProductsRepository } from '@/data/protocols'
import { productListMock } from '@/tests/domain/mocks'

export class LoadProductsRepositorySpy implements LoadProductsRepository {
  result = productListMock()
  async loadAll (): Promise<LoadProductsRepository.Result> {
    return this.result
  }
}
