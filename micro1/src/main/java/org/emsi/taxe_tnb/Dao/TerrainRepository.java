package org.emsi.taxe_tnb.Dao;

import org.emsi.taxe_tnb.entities.Terrain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TerrainRepository extends JpaRepository<Terrain,Integer>{
	@Query("select p.nom from Terrain t inner join Proprietaire p on t.proprietaire.id=p.id where t.id= :terrainId")
	List<Object[]> getNomByTerrainId(@Param("terrainId") int terrainId);
	
	@Query("select c.type from Terrain t inner join Categorie c on t.categorie.id=c.id where t.id= :terrainId")
	List<Object[]> getTypeByTerrainId(@Param("terrainId") int terrainId);
	
}
