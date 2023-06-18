import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LoggerEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    fecha: string;

    @Column('text')
    valores: string;
}