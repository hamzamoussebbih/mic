import { Component, OnInit } from '@angular/core';
import { Taxetnb } from '../taxetnb';
import { Categorie } from '../categorie';
import { Proprietaire } from '../proprietaire';
import { Terrain } from '../terrain';
import { Taux } from '../taux';
import { TauxService } from '../taux.service';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { ProprietaireService } from '../proprietaire.service';
import { TerrainService } from '../terrain.service';
import { TaxetnbService } from '../taxetnb.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taxetnb',
  templateUrl: './taxetnb.component.html',
  styleUrls: ['./taxetnb.component.css']
})
export class TaxetnbComponent implements OnInit{

  taxes : Taxetnb = new Taxetnb();
  taxe : Taxetnb[] | undefined;
  categorie : Categorie[] | undefined;
  proprietaire : Proprietaire[] | undefined;
  terrain : Terrain[] | undefined;
  taux : Taux[] | undefined;

  constructor(private tauxService : TauxService, private router : Router,
    private categorieService : CategorieService, private proprietaireService : ProprietaireService,
    private terrainService : TerrainService, private taxetnbService : TaxetnbService){}

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
  private getProprietaires(){
    this.proprietaireService.getProprietairesList().subscribe(data => {
    this.proprietaire = data;

    });
  }
  private getTerrains(){
    this.terrainService.getTerrainsList().subscribe(data => {
    this.terrain = data;

    });
  }
  private getTaxeTnb(){
    this.taxetnbService.getTaxeList().subscribe(data => {
    this.taxe = data;
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProprietaires();
    this.getTaux();
    this.getTaxeTnb();
    this.getTerrains();
  }

  deleteTaxe(id : number|undefined){
    this.taxetnbService.deleteTaxe(id).subscribe(data =>{ // pour ecouter les emissions d'observable
      Swal.fire({
        icon: 'success',
    title: 'Taxe Deleted Successfully!',
    showConfirmButton: true,
    confirmButtonText: 'OK'
      }).then((result)=>{
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    });
  }

  calculateMontant(): void {
    if (this.taxes.taux && this.taxes.terrain && this.taxes.taux.montant !== undefined && this.taxes.terrain.mc !== undefined) {
      this.taxes.montantbase = this.taxes.taux.montant * this.taxes.terrain.mc;
    }
  }
  onSubmit(): void {
    this.calculateMontant(); // Call the calculateMontant method before saving
    this.taxetnbService.createTaux(this.taxes).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
      title: 'Taxe Created Successfully!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
      title: 'Taxe not created!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
        }).then((result)=>{
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    );
  }



}
