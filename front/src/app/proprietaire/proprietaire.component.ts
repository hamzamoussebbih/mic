import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../proprietaire';
import { ProprietaireService } from '../proprietaire.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit{
  proprietaire : Proprietaire[] | undefined;
  proprietaires : Proprietaire = new Proprietaire();

  constructor(private proprietaireService : ProprietaireService, private router : Router){}

  ngOnInit(): void {
    this.getProprietaires();
  }

  private getProprietaires(){
    this.proprietaireService.getProprietairesList().subscribe(data => {
    this.proprietaire = data;

    });
  }
  deleteCategorie(id : number|undefined){
    this.proprietaireService.deleteProprietaire(id).subscribe(data =>{ // pour ecouter les emissions d'observable
      console.log(data);
      Swal.fire({
        icon: 'success',
    title: 'Owner Deleted Successfully!',
    showConfirmButton: true,
    confirmButtonText: 'OK'
      }).then((result)=>{
        if (result.isConfirmed) {
          window.location.reload();
        }
      });

    });
  }

  createProprietaire(){
    this.proprietaireService.createProprietaire(this.proprietaires).subscribe(data=>{
      console.log(data);
      Swal.fire({
        icon: 'success',
    title: 'Owner Created Successfully!',
    showConfirmButton: true,
    confirmButtonText: 'OK'
      }).then((result)=>{
        if (result.isConfirmed) {
          window.location.reload();
        }
      });// here
    },error => {
      console.error(error);
      Swal.fire({
        icon: 'warning',
        title: 'Error Deleting Owner',
        text: 'Something went wrong while deleting the owner. Please try again.',
        showConfirmButton: true,
        confirmButtonText: 'OK'
      });
    });
      }


      ngSubmit(){
        this.createProprietaire();
      }

      updateProprietaire(id : number | undefined){
        this.router.navigate(['update-proprietaire', id]);
          }



}
