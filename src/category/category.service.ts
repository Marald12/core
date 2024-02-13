import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from './entities/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly categoryRepository: Repository<CategoryEntity>
	) {}

	async create(dto: CreateCategoryDto) {
		return await this.categoryRepository.save({
			...dto
		})
	}

	async findAll() {
		return await this.categoryRepository.find({
			relations: {
				products: true
			},
			order: {
				createdAt: 'desc'
			}
		})
	}

	async findOne(id: number) {
		const category = await this.categoryRepository.findOne({
			where: { id },
			relations: {
				products: true
			}
		})
		if (!category) throw new NotFoundException('Категория не найдена!')

		return category
	}

	async update(id: number, dto: UpdateCategoryDto) {
		await this.findOne(id)

		await this.categoryRepository.update(id, {
			...dto
		})

		return await this.findOne(id)
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.categoryRepository.delete(id)

		return 'Категория успешно удалена!'
	}
}
