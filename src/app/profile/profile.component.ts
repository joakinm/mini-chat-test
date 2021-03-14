import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public buttonClicked = false;
  public isFavourite = false;
  public user: User;

  constructor(private router : Router, private appDataService: AppDataService) {
    this.user = this.appDataService.user;
   }

  ngOnInit(): void {
  }

  public onClick() {
    this.buttonClicked = !this.buttonClicked;
  }

  public onFavouriteChange() {
    this.isFavourite = !this.isFavourite;
  }

  public onReturn() {
    this.router.navigate(['/chat']);
  }

}
