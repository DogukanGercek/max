import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  constructor(private UsersService: UsersService,
              private CounterService : CounterService
  ) {}

  inactiveUsers : string[] = [];
  ngOnInit(): void {
    this.inactiveUsers = this.UsersService.inactiveUsers;

  }

  onSetToActive(id: number) {
    console.log(id);
    this.UsersService.onSetToActive(id);
    this.CounterService.incrementInactiveToActive();
  }
}
