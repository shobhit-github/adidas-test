

import {Entity, Column, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Users} from "./users";

@Entity("albums")
export class Albums extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', type: "int"})
    id!: number;

    @Column({type: "int", name: 'userId'})
    userId!: number;

    @Column({type: "varchar", length: 200, name: 'title'})
    title!: string;

    @Column({name: 'createdOn', type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
    createdOn!: Date;

    @ManyToOne(() => Users, (user: Users) => user.id, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    user!: Users;
}
