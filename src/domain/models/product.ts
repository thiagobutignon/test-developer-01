/**
{
    "key": "fa494ffb-0af7-4bee-985c-556e5e90721f",
    "data_preco": "2023-08-01",
    "cod_produto": 9999999999999,
    "sku": "PZ0912",
    "qtd_estoque": 10.0,
    "desconto": 0.0,
    "data_hora_insercao": "2023-07-01 00:00:00",
    "data_inicio": "2023-07-01",
    "data_fim": "2023-07-31"
}
 */

export type Product = {
  key: string
  priceDate: Date
  productCode: number
  sku: string
  stockQuantity: number
  discount: number
  insertDateAndTime: Date
  initialDate: Date
  finalDate: Date
}
