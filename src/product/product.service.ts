import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhereProperty, ILike, Repository } from 'typeorm'
import { ProductEntity } from './entities/product.entity'

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productRepository: Repository<ProductEntity>
	) {}

	async create(dto: CreateProductDto, categoryId: number) {
		return await this.productRepository.save({
			...dto,
			category: {
				id: categoryId
			}
		})
	}

	async findAll(search?: string) {
		let options: FindOptionsWhereProperty<ProductEntity> = {}

		if (search) {
			options = {
				title: ILike(`%${search}%`)
			}
		}

		return await this.productRepository.find({
			where: { ...options },
			relations: {
				category: true
			},
			order: {
				createdAt: 'desc'
			}
		})
	}

	async findOne(id: number) {
		const product = await this.productRepository.findOne({
			where: { id },
			relations: {
				category: true
			}
		})
		if (!product) throw new NotFoundException('Продукт не найден!')

		return product
	}

	async update(id: number, dto: UpdateProductDto) {
		await this.findOne(id)
		await this.productRepository.update(id, {
			...dto
		})

		return await this.findOne(id)
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.productRepository.delete(id)

		return 'Продукт успешно удалена!'
	}
}
