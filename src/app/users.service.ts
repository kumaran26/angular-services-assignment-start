import { EventEmitter, Output } from "@angular/core";

export class UsersService{

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    @Output() updateUsers = new EventEmitter<any>();

    constructor(){}

    setActiveUsers(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        //this.updateUsers.emit({activeUsers: this.activeUsers, inactiveUsers: this.inactiveUsers});
    }

    setInactiveUsers(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        //this.updateUsers.emit({activeUsers: this.activeUsers, inactiveUsers: this.inactiveUsers});
    }

}