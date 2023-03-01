

import {Entity, Column, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("users")
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', type: "int"})
    id!: number;

    @Column({type: "int", name: 'name'})
    name!: number;

    @Column({type: "varchar", length: 100, name: 'email', nullable: true})
    email!: string;

    @Column({type: "float", name: 'address_geo_lat', nullable: true})
    addressGeoLatitude!: string;

    @Column({name: 'address_geo_lng', type: "float", nullable: true})
    addressGeoLongitude!: number;

    @Column({name: 'createdOn', type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
    createdOn!: Date;

}
