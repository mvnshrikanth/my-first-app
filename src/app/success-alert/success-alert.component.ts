import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    // styleUrls: ['./success-alert.component.css']
    styles: [`
    .online{
        color: white;
}`]
})
export class SuccessAlertComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus() {
        return this.serverStatus;
    }
}
