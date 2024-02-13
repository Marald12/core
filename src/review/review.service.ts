import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ReviewEntity } from './entities/review.entity'

@Injectable()
export class ReviewService {
	constructor(
		@InjectRepository(ReviewEntity)
		private readonly reviewRepository: Repository<ReviewEntity>
	) {}

	async create(dto: CreateReviewDto) {
		return await this.reviewRepository.save({
			...dto
		})
	}

	async findAll() {
		return await this.reviewRepository.find({
			order: {
				createdAt: 'desc'
			}
		})
	}

	async findOne(id: number) {
		const review = await this.reviewRepository.findOneBy({ id })
		if (!review) throw new NotFoundException('Отзыв не найден!')

		return review
	}

	async update(id: number, dto: UpdateReviewDto) {
		await this.findOne(id)
		await this.reviewRepository.update(id, { ...dto })

		return await this.findOne(id)
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.reviewRepository.delete(id)

		return 'Отзыв успешно удалён!'
	}
}
