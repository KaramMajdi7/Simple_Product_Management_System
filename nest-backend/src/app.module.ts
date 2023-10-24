import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db',
      database: 'nard-db',
      username: 'root',
      password: 'admin@2023',
      port: 3306,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
