import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    username: string;

    @Column('text')
    password: string;

    @Column('text')
    email: string;

    @Column('text', {unique: true})
    gender: string;

    @Column('text')
    age: string;
}