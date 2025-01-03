import {Column, Entity} from "typeorm";
import {Auditable} from "./Auditable";

@Entity("mangas")
export default class Manga extends Auditable {
    @Column()
    title: string
}