import { BaseEntity } from '../../utils/base.entity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { ProductEntity } from '../../product/entities/product.entity'

@Entity('Order')
export class OrderEntity extends BaseEntity {
	@Column()
	phone: string

	@Column()
	name: string

	@Column({ name: 'type_payment' })
	typePayment: 'card' | 'cash'

	@Column({ name: 'type_delivery' })
	typeDelivery: 'courier' | 'pickup'

	@Column({ default: null })
	change?: number

	@Column({ default: null })
	street?: string

	@Column({ default: null })
	house?: string

	@Column({ default: null })
	room?: string

	@Column({ default: null })
	entrance?: string

	@Column({ default: null })
	floor?: string

	@Column({ default: null })
	code?: string

	@Column({ default: null })
	comment?: string

	@Column({ default: null })
	email?: string

	@Column({ default: null })
	promo?: string

	@ManyToMany(() => ProductEntity)
	@JoinTable()
	products: ProductEntity[]
}
