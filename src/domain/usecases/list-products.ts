import { Products } from '@/domain/models'

export interface ListProducts {
  perform: () => Promise<ListProducts.Result>
}

export namespace ListProducts {
  export type Result = Products[]
}
