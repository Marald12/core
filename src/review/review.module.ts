import { Module } from '@nestjs/common'
import { ReviewService } from './review.service'
import { ReviewController } from './review.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReviewEntity } from './entities/review.entity'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService],
	imports: [TypeOrmModule.forFeature([ReviewEntity])]
})
export class ReviewModule {}
