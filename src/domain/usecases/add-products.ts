import { Products } from '@/domain/models'

export interface AddProducts {
  perform: (params: AddProducts.Params) => Promise<AddProducts.Result>
}

export namespace AddProducts {
  export type Params = Products[]

  export type Result = Products[]
}
