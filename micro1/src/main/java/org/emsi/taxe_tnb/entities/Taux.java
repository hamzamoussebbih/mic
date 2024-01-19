package org.emsi.taxe_tnb.entities;

import jakarta.persistence.*;

@Entity
public class Taux {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private double montant;
	@ManyToOne
	private Categorie categorie;
	
	public int getId(){return id;}
	public void setId(int id){this.id=id;}

	public Categorie getCategorie(){return categorie;}
	public void setCategorie(Categorie categorie){this.categorie=categorie;}

	public double getMontant(){return montant;}
	public void setMontant(double montant){this.montant= montant;}
	
	
	
	
}
