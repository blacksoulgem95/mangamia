import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export abstract class Auditable {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({default: "anonymous"})
    createdBy: string;

    @Column({default: "anonymous"})
    updatedBy: string;

    @Column()
    @CreateDateColumn()
    createdOn: Date;

    @Column()
    @UpdateDateColumn()
    updatedOn: Date;
}