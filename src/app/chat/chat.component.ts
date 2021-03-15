import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { Chat } from '../models/chat.model';
import { Responses } from '../models/responses.enum';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public form: NgForm;
  public otherUser: User;
  public chat = new Array<Chat>();
  public message: string;
  public imgActualUser = 'https://cdn.stocksnap.io/img-thumbs/960w/photographer-picture_MMA5ZK4YEI.jpg';
  public isWritting = false;

  constructor(private router: Router, private appDataService: AppDataService) { 
    this.otherUser = this.appDataService.user;
  }
  
  ngOnInit(): void {
    this.chat.push(this.responses());
  }

  public onReturn() {
    this.router.navigate(['/profile']);
  }

  public onSendMessage() {
    const chat: Chat = {user: 1, message: this.message};
    this.chat.push(chat);
    this.message = '';
    setTimeout( () => {
      this.isWritting = true;
      setTimeout( () => {
        this.chat.push(this.responses());
        this.isWritting = false;
      }, 3000);
    }, 1000);
  }

  public responses() {
    const randomNumber = Math.trunc(Math.random() * 10);
    const response: Chat = {user: 0, message: Responses[randomNumber]};
    return response;
  }
}
