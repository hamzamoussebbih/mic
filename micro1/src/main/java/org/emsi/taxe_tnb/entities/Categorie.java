package org.emsi.taxe_tnb.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Categorie {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String type;


	public int getId(){return id;}
	public void setId(int id){this.id=id;}

	public String getType(){return type;}
	public void setType(String type){this.type=type;}
	
	
	
}
