import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public user: User;
  constructor(private router: Router, private appDataService: AppDataService) { 
    this.user = this.appDataService.user;
  }
  
  ngOnInit(): void {
  }

  public onReturn() {
    this.router.navigate(['/profile']);
  }
}
