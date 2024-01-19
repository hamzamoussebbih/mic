import { Component, OnInit } from '@angular/core';
import { Terrain } from '../terrain';
import { Categorie } from '../categorie';
import { Proprietaire } from '../proprietaire';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from '../terrain.service';
import { ProprietaireService } from '../proprietaire.service';

@Component({
  selector: 'app-update-terrain',
  templateUrl: './update-terrain.component.html',
  styleUrls: ['./update-terrain.component.css']
})
export class UpdateTerrainComponent implements OnInit{

  terrain : Terrain[] | undefined;
  terrains : Terrain = new Terrain();
  categorie : Categorie[] | undefined;
  proprietaire : Proprietaire[] | undefined;
  proprietaires : Proprietaire = new Proprietaire();

  constructor(private categorieService : CategorieService, private route : ActivatedRoute, private router : Router,
    private terrainService : TerrainService,private proprietaireService : ProprietaireService){}


    private getProprietaires(){
      this.proprietaireService.getProprietairesList().subscribe(data => {
      this.proprietaire = data;

      });
    }
    private getCategories(){
      this.categorieService.getCategoriesList().subscribe(data => {
      this.categorie = data;

      });
    }
  id : number|undefined;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // extraire la valeur de id from URL
    this.terrainService.getTerrainById(this.id).subscribe(data =>{
    this.terrains = data;
  });
  this.getCategories();
    this.getProprietaires();
  }

  onSubmit(){
    this.terrainService.updateTerrain(this.id, this.terrains).subscribe(data =>{
      this.goToTerrainHome();
    });
  }
  goToTerrainHome(){
    this.router.navigate(['/terrain']);
      }
}
