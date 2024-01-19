import { Component, OnInit } from '@angular/core';
import { TauxService } from '../taux.service';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { Taux } from '../taux';
import { Categorie } from '../categorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements OnInit{

  constructor(private tauxService : TauxService, private router : Router,
    private categorieService : CategorieService){}

    taux : Taux[] | undefined;
    tauxs : Taux = new Taux();
    categorie : Categorie[] | undefined;


    private getCategories(){
      this.categorieService.getCategoriesList().subscribe(data => {
      this.categorie = data;

      });
    }

    private getTaux(){
      this.tauxService.getTauxList().subscribe(data => {
      this.taux = data;
      });
    }

    ngOnInit(): void {
      this.getTaux();
      this.getCategories();
    }

    createTaux(){
      this.tauxService.createTaux(this.tauxs).subscribe(data=>{
        Swal.fire({
          icon: 'success',
      title: 'Taux Add Successfully!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
    }

    onSubmit(){
      this.createTaux();
    }

    deleteTaux(id : number|undefined){
      this.tauxService.deleteTaux(id).subscribe(data =>{ // pour ecouter les emissions d'observable
        Swal.fire({
          icon: 'success',
      title: 'Taux Deleted Successfully!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
    }

    updateTaux(id : number | undefined){
      this.router.navigate(['update-taux', id]);
        }


}
