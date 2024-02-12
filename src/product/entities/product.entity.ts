import { BaseEntity } from '../../utils/base.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { CategoryEntity } from '../../category/entities/category.entity'

@Entity('Product')
export class ProductEntity extends BaseEntity {
	@Column()
	title: string

	@Column()
	weight: number

	@Column()
	price: number

	@Column({ default: 0 })
	discount?: number

	@Column({ type: 'text' })
	composition: string

	@Column()
	pieces: number

	@Column({ name: 'image_path' })
	imagePath: string

	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'category_id' })
	category: CategoryEntity
}
