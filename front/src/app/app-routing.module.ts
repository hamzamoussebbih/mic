import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { TerrainComponent } from './terrain/terrain.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
import { TauxComponent } from './taux/taux.component';
import { UpdateTauxComponent } from './update-taux/update-taux.component';
import { TaxetnbComponent } from './taxetnb/taxetnb.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : "categorie", component : CategorieComponent},
  {path : "proprietaire", component : ProprietaireComponent},
  {path : "terrain", component : TerrainComponent},
  {path : "taux", component : TauxComponent},
  {path : "taxetnb", component : TaxetnbComponent},
  {path : "update-categorie/:id", component : UpdateCategorieComponent},
  {path : "update-proprietaire/:id", component : UpdateProprietaireComponent},
  {path : "update-terrain/:id", component : UpdateTerrainComponent},
  {path : "update-taux/:id", component : UpdateTauxComponent},
  {path : "", component: AuthentifComponent },
  {path : "home", component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
