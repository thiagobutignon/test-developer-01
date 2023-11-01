import { Product } from '@/domain/models'

export interface LoadProductsRepository {
  loadAll: () => Promise<LoadProductsRepository.Result>
}

export namespace LoadProductsRepository {
  export type Result = Product[]
}
