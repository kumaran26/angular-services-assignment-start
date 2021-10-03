import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private userService: UsersService){}

  @Input() users: string[];

  onSetToActive(id: number) {
    this.userService.setActiveUsers(id);
  }
}
