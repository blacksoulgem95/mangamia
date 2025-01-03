import {Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent} from "typeorm";
import {CurrentUserService} from "../services/current-user/current-user.service";

@EventSubscriber()
export class AuditSubscriber implements EntitySubscriberInterface {

    constructor(private currentUserSvc: CurrentUserService,
                private connection: Connection) {
        this.connection.subscribers.push(this);
    }

    beforeInsert(event: InsertEvent<any>) {
        console.log(`BEFORE ENTITY INSERTED: `, event.entity)
        event.entity.createdBy = this.currentUserSvc.getUsername()
    }
    afterInsert(event: InsertEvent<any>) {
        console.log(`AFTER ENTITY INSERTED: `, event.entity);
    }
    beforeUpdate(event: UpdateEvent<any>) {
        console.log(`BEFORE ENTITY UPDATED: `, event.entity);
        event.entity.updatedBy = this.currentUserSvc.getUsername()
    }
    afterUpdate(event: UpdateEvent<any>) {
        console.log(`AFTER ENTITY UPDATED: `, event.entity);
    }
}