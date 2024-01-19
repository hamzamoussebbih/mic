package org.emsi.taxe_tnb.Dao;

import org.emsi.taxe_tnb.entities.Proprietaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProprietaireRepository extends JpaRepository<Proprietaire,Integer>{
	
	public Proprietaire findByCIN(String CIN);
	Boolean existsByCIN(String CIN);
}
