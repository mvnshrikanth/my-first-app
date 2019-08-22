import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'TestServer';
  servers = ['Test Server 1', 'Test Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server was created! ' + this.serverName;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName() {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
