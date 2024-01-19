package org.emsi.taxe_tnb.Service;


import jakarta.transaction.Transactional;
import org.emsi.taxe_tnb.Dao.TauxRepository;
import org.emsi.taxe_tnb.Dao.TaxeTnbRepository;
import org.emsi.taxe_tnb.Dao.TerrainRepository;
import org.emsi.taxe_tnb.entities.Categorie;
import org.emsi.taxe_tnb.entities.Taux;
import org.emsi.taxe_tnb.entities.TaxeTnb;
import org.emsi.taxe_tnb.entities.Terrain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TerrainService {
	
	@Autowired
	TerrainRepository terrainRepository;
	@Autowired
	private TauxRepository tauxRepository;
	@Autowired
	private TaxeTnbRepository taxeTnbRepository;
	public <S extends Terrain> S save(S entity) {
		return terrainRepository.save(entity);
	}

	public List<Terrain> findAll() {
		return terrainRepository.findAll();
	}

	public Optional<Terrain> findById(Integer id) {
		return terrainRepository.findById(id);
	}

	public void deleteById(Integer id) {
		terrainRepository.deleteById(id);
	}
	
	public List<Object[]> getNomByTerrainId(int terrainId) {
        return terrainRepository.getNomByTerrainId(terrainId);
    }
	
	public List<Object[]> getTypeByTerrainId(int terrainId){
		return terrainRepository.getTypeByTerrainId(terrainId);
	}

	@Transactional
	public double  calculateAndSaveTax(int terrainId,int year) {
		Terrain terrain = terrainRepository.findById(terrainId).orElse(null);
		if (terrain == null) {
			// Handle the case where the terrain is not found
			return 0.0;
		}

		Categorie categorie = terrain.getCategorie();
		if (categorie == null) {
			// Handle the case where the category is not found
			return 0.0;
		}

		// Assuming tauxRepository has a method to get the appropriate taux based on category
		List<Taux> tauxList = tauxRepository.findTauxByCategorie(categorie);

		if (tauxList.isEmpty()) {
			// Handle the case where no taux is found for the specified category
			return 0.0;
		}

		double tauxValue = tauxList.get(0).getMontant(); // Assuming Taux has a field named 'montant'

		// Calculate tax
		double taxeValue = tauxValue * terrain.getMc();

		// Save the calculated tax in the Taxe table
		TaxeTnb taxeTnb = new TaxeTnb();
		taxeTnb.setTerrain(terrain);
		taxeTnb.setTaux(tauxList.get(0));
		taxeTnb.setMontantbase(taxeValue);
		taxeTnb.setTnbyear(year);
		taxeTnbRepository.save(taxeTnb);

		return taxeValue;
	}
}
