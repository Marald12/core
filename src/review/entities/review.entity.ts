import { BaseEntity } from '../../utils/base.entity'
import { Column, Entity } from 'typeorm'

@Entity('Review')
export class Review extends BaseEntity {
	@Column({ type: 'text' })
	review: string

	@Column()
	name: string
}
