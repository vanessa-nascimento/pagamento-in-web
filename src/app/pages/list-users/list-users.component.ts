import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  filter = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users().subscribe(users => {
      this.filter = '';
      this.users = users;
    });
  }

}
