import { Product } from '@/domain/models'

export interface ListProduct {
  performs: () => Promise<ListProduct.Result>
}

export namespace ListProduct {
  export type Result = Product[]
}
