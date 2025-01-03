import {Column, Entity} from "typeorm";
import {Auditable} from "./Auditable";

@Entity({name: 'authors'})
export class Author extends Auditable {
    @Column()
    name: string

    @Column()
    site?: string

    @Column()
    comment?: string

    @Column()
    dob?: Date
}