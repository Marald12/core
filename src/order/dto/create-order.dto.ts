import { IsString } from 'class-validator'
import { ProductEntity } from '../../product/entities/product.entity'

export class CreateOrderDto {
	@IsString({ message: 'Не являеться строкой!' })
	phone: string

	@IsString({ message: 'Не являеться строкой!' })
	name: string

	@IsString({ message: 'Не являеться строкой!' })
	typePayment: 'card' | 'cash'

	@IsString({ message: 'Не являеться строкой!' })
	typeDelivery: 'courier' | 'pickup'

	change?: number
	street?: string
	house?: string
	room?: string
	entrance?: string
	floor?: string
	code?: string
	comment?: string
	email?: string
	promo?: string
	products: ProductEntity[]
}
