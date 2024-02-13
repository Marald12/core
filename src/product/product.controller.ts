import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post(':id')
	create(@Body() dto: CreateProductDto, @Param('id') categoryId: string) {
		return this.productService.create(dto, +categoryId)
	}

	@Get()
	findAll(@Query('search') search?: string) {
		return this.productService.findAll(search)
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productService.findOne(+id)
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
		return this.productService.update(+id, dto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productService.remove(+id)
	}
}
