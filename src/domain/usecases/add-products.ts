import { Product } from '@/domain/models'

export interface AddProducts {
  perform: (params: AddProducts.Params) => Promise<AddProducts.Result>
}

export namespace AddProducts {
  export type Params = Product[]

  export type Result = Product[]
}
