import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {

  constructor(private userService: UsersService){}

   activeUsers = [];
   inactiveUsers = [];
   subscription;

   ngOnInit(){
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    // this.subscription = this.userService.updateUsers.subscribe((users) => {
    //   this.inactiveUsers = users?.inactiveUsers;
    //   this.activeUsers = users?.activeUsers;
    // });
   }
}
