import { Product } from '@/domain/models'

export interface ListProduct {
  performs: () => Promise<ListProducts.Result>
}

export namespace ListProducts {
  export type Result = Product[]
}
