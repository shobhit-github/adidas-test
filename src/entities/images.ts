import {Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Albums} from "./album";

@Entity("images")
export class Images extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id'})
    id!: number;

    @Column({type: "int", name: 'albumId'})
    albumId!: number;

    @Column({type: "varchar", length: 200, name: 'title'})
    title!: string;

    @Column({type: "text", name: 'title'})
    url!: string;

    @Column({name: 'createdOn', type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
    createdOn!: Date;

    @ManyToOne(() => Albums, (al: Albums) => al.id, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'albumId'})
    album!: Albums;
}
