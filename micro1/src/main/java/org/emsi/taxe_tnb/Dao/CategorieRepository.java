package org.emsi.taxe_tnb.Dao;

import org.emsi.taxe_tnb.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie,Integer>{

}
