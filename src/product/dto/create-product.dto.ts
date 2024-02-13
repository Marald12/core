import { IsNumber, IsString, IsUrl } from 'class-validator'

export class CreateProductDto {
	@IsString({ message: 'Не являеться строкой!' })
	title: string

	@IsNumber({}, { message: 'Не являеться числом!' })
	weight: number

	@IsNumber({}, { message: 'Не являеться числом!' })
	price: number

	discount?: number

	@IsString({ message: 'Не являеться строкой!' })
	composition: string

	@IsNumber({}, { message: 'Не являеться числом!' })
	pieces: number

	@IsString({ message: 'Не являеться строкой!' })
	@IsUrl({}, { message: 'Не являеться ссылкой!' })
	imagePath: string
}
