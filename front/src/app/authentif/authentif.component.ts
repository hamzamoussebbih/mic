import { Component, OnInit } from '@angular/core';
import { AuthentifService } from '../authentif.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-authentif',
  templateUrl: './authentif.component.html',
  styleUrls: ['./authentif.component.css']
})
export class AuthentifComponent{
  username: string = '';
  password: string = '';

  constructor(private authentifService : AuthentifService, private router : Router){}

  login() {
    this.authentifService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        Swal.fire({
          icon: 'success',
      title: 'Welcome Admin !',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            this.router.navigate(['/terrain']);
          }
        });

      },
      (error) => {
        console.error('Login failed', error);
        Swal.fire({
          icon: 'error',
      title: 'You don\'t have the access!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            console.log('sorry');
          }
        });
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }



}
