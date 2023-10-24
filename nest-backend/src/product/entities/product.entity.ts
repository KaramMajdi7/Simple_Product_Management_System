import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    price: number;

    // For testing purposes only
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @Exclude()
    createdOn: Date;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @Exclude()
    modifiedOn: Date;
}
