import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false
  serverCreationStatus ="No server was created"
  serverName =""
  userName =""
  isEmpty:boolean = true
  constructor() { 
    setTimeout(()=>{this.allowNewServer=true},2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onEmptyUsername(){
    this.userName = ""
    this.isEmpty = true
  }

  onUpdateUsername(event:any){
    if (this.userName.length !=0){
      this.isEmpty= false
    }
  }
}
