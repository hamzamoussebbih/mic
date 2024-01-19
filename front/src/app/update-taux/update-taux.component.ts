import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TauxService } from '../taux.service';
import { Categorie } from '../categorie';
import { Taux } from '../taux';

@Component({
  selector: 'app-update-taux',
  templateUrl: './update-taux.component.html',
  styleUrls: ['./update-taux.component.css']
})
export class UpdateTauxComponent implements OnInit{

  constructor(private categorieService : CategorieService, private route : ActivatedRoute, private router : Router,
    private tauxService : TauxService){}

    categorie : Categorie[] | undefined;
    taux : Taux[] | undefined;
    tauxs : Taux = new Taux();
    id : number|undefined;



    private getCategories(){
      this.categorieService.getCategoriesList().subscribe(data => {
      this.categorie = data;

      });
    }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id']; // extraire la valeur de id from URL
    this.tauxService.getTauxById(this.id).subscribe(data =>{
    this.tauxs = data;
  });
      this.getCategories();
    }
    goToTauxHome(){
      this.router.navigate(['/taux']);
        }

        onSubmit(){
          this.tauxService.updateTaux(this.id, this.tauxs).subscribe(data =>{
            this.goToTauxHome();
          });
        }
}
