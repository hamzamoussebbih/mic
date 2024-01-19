import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from '../proprietaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietaire } from '../proprietaire';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-proprietaire',
  templateUrl: './update-proprietaire.component.html',
  styleUrls: ['./update-proprietaire.component.css']
})
export class UpdateProprietaireComponent implements OnInit{

  constructor(private proprietaireService : ProprietaireService, private route : ActivatedRoute, private router : Router){}
  proprietaires : Proprietaire = new Proprietaire();
  id : number|undefined;

  goToProprietaireHome(){
    this.router.navigate(['/proprietaire']);
      }

      onSubmit(){
        this.proprietaireService.updateProprietaire(this.id, this.proprietaires).subscribe(data =>{
          this.goToProprietaireHome();
          console.log('updated');
          /*Swal.fire({
            icon: 'success',
        title: 'Owner updated Successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
          }).then((result)=>{
            if (result.isConfirmed) {
              this.goToProprietaireHome();
            }
          });*/
        });
      }

      ngOnInit(): void {
        this.id = this.route.snapshot.params['id']; // extraire la valeur de id from URL
      this.proprietaireService.getProprietaireById(this.id).subscribe(data =>{
        this.proprietaires = data;
      });
      }

}
