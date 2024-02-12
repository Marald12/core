import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrderEntity } from './entities/order.entity'
import { ProductEntity } from '../product/entities/product.entity'

@Module({
	controllers: [OrderController],
	providers: [OrderService],
	imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity])]
})
export class OrderModule {}
