import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from '../../utils/base.entity'
import { ProductEntity } from '../../product/entities/product.entity'

@Entity('Category')
export class CategoryEntity extends BaseEntity {
	@Column({ unique: true })
	title: string

	@Column({ name: 'logo_path' })
	logoPath: string

	@Column({ name: 'in_stock', default: true })
	inStock?: boolean

	@OneToMany(() => ProductEntity, product => product.category)
	products: ProductEntity[]
}
