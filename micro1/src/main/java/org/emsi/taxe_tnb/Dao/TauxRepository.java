package org.emsi.taxe_tnb.Dao;

import org.emsi.taxe_tnb.entities.Categorie;
import org.emsi.taxe_tnb.entities.Taux;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TauxRepository extends JpaRepository<Taux,Integer>{
    @Query("SELECT t FROM Taux t WHERE t.categorie = :categorie")
    List<Taux> findTauxByCategorie(@Param("categorie") Categorie categorie);
}
