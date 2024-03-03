import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  constructor(private UsersService: UsersService,
              private CounterService : CounterService
  ) {}
  activeUsers : string[] = [];
  ngOnInit(): void {
    this.activeUsers = this.UsersService.activeUsers;
  }
  onSetToInactive(id: number) {
    console.log(id);
    this.UsersService.onSetToInactive(id);
    this.CounterService.incrementActiveToInactive();
  }
}
