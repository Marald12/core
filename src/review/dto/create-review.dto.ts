import { IsString } from 'class-validator'

export class CreateReviewDto {
	@IsString({ message: 'Не являеться строкой!' })
	review: string

	@IsString({ message: 'Не являеться строкой!' })
	name: string
}
