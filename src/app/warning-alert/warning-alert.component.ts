import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  constructor() {
    setTimeout(() => { 
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

onCreateServer(){
  this.serverCreationStatus='Server was created!';
}

}
