import { Product } from '@/domain/models'

export interface ListProduct {
  perform: () => Promise<ListProducts.Result>
}

export namespace ListProducts {
  export type Result = Product[]
}
