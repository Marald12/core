import { IsString, IsUrl } from 'class-validator'

export class CreateCategoryDto {
	@IsString({ message: 'Не являеться строкой!' })
	title: string

	@IsString({ message: 'Не являеться строкой!' })
	@IsUrl({}, { message: 'Не являеться ссылкой!' })
	logoPath: string

	inStock?: boolean
}