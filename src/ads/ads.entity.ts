import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    bathrooms: number;

    @Column()
    bedrooms: number;

    @Column()
    type: string;

    @Column()
    createdAt: string;

    @Column()
    avatar: string;
}