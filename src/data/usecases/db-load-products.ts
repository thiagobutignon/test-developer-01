import { ListProduct } from '@/domain/usecases'
import { LoadProductsRepository } from '@/data/protocols'

export class DbLoadProducts implements ListProduct {
  constructor (private readonly loadProductsRepository: LoadProductsRepository) {}
  async performs (): Promise<ListProduct.Result> {
    return this.loadProductsRepository.loadAll()
  }
}
