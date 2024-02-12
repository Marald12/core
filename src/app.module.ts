import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { typeOrmConfig } from './config/typeOrm.config'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'
import { OrderModule } from './order/order.module'
import { ReviewModule } from './review/review.module'
import { MediaModule } from './media/media.module'

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env'
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: typeOrmConfig
		}),
		CategoryModule,
		ProductModule,
		OrderModule,
		ReviewModule,
		MediaModule
	]
})
export class AppModule {}
