// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'products' })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class PgProducts {
  @PrimaryGeneratedColumn('uuid')
  key!: string

  @Column('date')
  priceDate!: Date

  @Column('int')
  productCode!: number

  @Column('varchar')
  sku!: string

  @Column('int')
  stockQuantity!: number

  @Column('float')
  discount!: number

  @Column('timestamp')
  insertDateAndTime!: Date

  @Column('date')
  initialDate!: Date

  @Column('date')
  finalDate!: Date
}
