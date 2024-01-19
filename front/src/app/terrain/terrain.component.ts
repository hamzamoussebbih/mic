import { Component, OnInit } from '@angular/core';
import { Terrain } from '../terrain';
import { TerrainService } from '../terrain.service';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Proprietaire } from '../proprietaire';
import { ProprietaireService } from '../proprietaire.service';
import { CategorieService } from '../categorie.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit{
  terrain : Terrain[] | undefined;
  terrains : Terrain = new Terrain();
  categorie : Categorie[] | undefined;
  proprietaire : Proprietaire[] | undefined;
  proprietaires : Proprietaire = new Proprietaire();
  terrainsSearch: any[] = [];
  cinToSearch: string = '';
  showAllData: boolean = true;


  constructor(private categorieService : CategorieService,private proprietaireService : ProprietaireService,private terrainService : TerrainService, private router : Router){}

  searchTerrainByCin(): void {
    const cinToSearch = this.cinToSearch.trim();

    if (cinToSearch !== "") {
      console.log('CIN to search:', cinToSearch);

      this.terrainService.searchTerrainByProprietaireCin(cinToSearch).subscribe(
        (response) => {
          this.terrainsSearch = response;
          this.showAllData = false;
          console.log('Search Result:', response);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Error: CinToSearch is null or an empty string');
    }
  }




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


  ngOnInit(): void { // execute avant constructor ( charger une seule fois )
    this.getTerrains();
    this.getCategories();
    this.getProprietaires();
  }

  private getTerrains(){
    this.terrainService.getTerrainsList().subscribe(data => {
    this.terrain = data;

    });
  }

  private getNomProprietaireById(terrainId : number|undefined){
    this.terrainService.getNomProprietaireById(terrainId).subscribe(data =>{ // pour ecouter les emissions d'observable
      console.log(data);
      window.location.reload();
    });
  }

  createTerrain() {

  const proprietaireId = this.terrains.proprietaire?.id;
  const categoryId = this.terrains.categorie?.id;

    if (proprietaireId !== undefined && categoryId !== undefined) {

      const terrainData: Terrain = {
        id: this.terrains.id,
        mc: this.terrains.mc,
        proprietaire: { id: proprietaireId, nom: '', prenom: '', cin: '', password: '' },
        categorie: { id: categoryId, type: '' },
      };
      this.terrainService.createTerrain(terrainData).subscribe(
        data => {
          Swal.fire({
            icon: 'success',
        title: 'Terrain Created Successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
          }).then((result)=>{
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        },
        error => {
          Swal.fire({
            icon: 'error',
        title: 'Terrain didn\'t created!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
          }).then((result)=>{
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      );
    } else {
      console.error('Error: ProprietaireId or CategoryId is undefined');
    }
  }

  deleteTerrain(id : number|undefined){
    this.terrainService.deleteTerrain(id).subscribe(data =>{ // pour ecouter les emissions d'observable
      Swal.fire({
        icon: 'success',
    title: 'Terrain Deleted Successfully!',
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
        this.createTerrain();
      }

      updateTerrain(id : number | undefined){
        this.router.navigate(['update-terrain', id]);
          }
}
