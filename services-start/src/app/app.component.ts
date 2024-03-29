import { Component, OnInit } from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts : {name: string, status: string}[] = [];

  constructor(private accountsService : AccountsService) {
  }
  ngOnInit(): void {
    this.accounts = this.accountsService.accounts; //same array because of reference
  }
}
