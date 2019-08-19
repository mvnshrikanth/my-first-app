import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string ='';
  message: string = "No user is added!";
  allowNewUser: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.message = 'User added ' + this.userName;
    this.userName = "";
  }

  onUpdateUserNme() {
    this.userName = (<HTMLInputElement>event.target).value;

    if (this.userName.length > 0) {
      this.allowNewUser = true;
    } else {
      this.allowNewUser = false;
    }
  }


}
