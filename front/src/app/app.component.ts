import { Component, OnInit } from '@angular/core';
import { AuthentifService } from './authentif.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taxe-tnb';
  isLoggedIn = false;

  constructor(public authentifService: AuthentifService) {
    this.authentifService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }
}
