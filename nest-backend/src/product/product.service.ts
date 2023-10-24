import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly repo: Repository<Product>) {

  }

  async create(createProductDto: CreateProductDto) {
    return await this.repo.insert(createProductDto);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const product = await this.repo.findOneBy({id});
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.repo.findOneBy({id});
    
    if(!product) {
      throw new BadRequestException('Product not found');
    }

    product.modifiedOn = new Date(Date.now());

    Object.assign(product, updateProductDto);
    return this.repo.save(product);
  }

  async remove(id: number) {
    const product = await this.repo.findOneBy({id});
    
    if (!product) {
      throw new BadRequestException('Product not found');
    }

    await this.repo.remove(product);
    return {success: true, product} 
  }
}
