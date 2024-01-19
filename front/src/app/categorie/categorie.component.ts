import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  categorie : Categorie[] | undefined;
  categories : Categorie = new Categorie();

  constructor(private categorieService : CategorieService, private router : Router){}
  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;

    });
  }
  createCategorie(){
    this.categorieService.createCategorie(this.categories).subscribe(data=>{
      Swal.fire({
        icon: 'success',
    title: 'Category Add Successfully!',
    showConfirmButton: true,
    confirmButtonText: 'OK'
      }).then((result)=>{
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    });
      }
      ngSubmit(){
        this.createCategorie();
      }

      deleteCategorie(id : number|undefined){
        this.categorieService.deleteCategorie(id).subscribe(data =>{ // pour ecouter les emissions d'observable
          Swal.fire({
            icon: 'success',
        title: 'Category Deleted Successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
          }).then((result)=>{
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        });
      }
      updateCategorie(id : number | undefined){
        this.router.navigate(['update-categorie', id]);
          }
}
