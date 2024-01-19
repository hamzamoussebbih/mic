package org.emsi.taxe_tnb.Service;

import org.emsi.taxe_tnb.Dao.ProprietaireRepository;
import org.emsi.taxe_tnb.entities.Proprietaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProprietaireService {
	@Autowired
	ProprietaireRepository proprietaireRepository;

	public <S extends Proprietaire> S save(S entity) {
		return proprietaireRepository.save(entity);
	}

	public List<Proprietaire> findAll(Sort sort) {
		return proprietaireRepository.findAll(sort);
	}

	public Optional<Proprietaire> findById(Integer id) {
		return proprietaireRepository.findById(id);
	}

	public void deleteById(Integer id) {
		proprietaireRepository.deleteById(id);
	}

	public Proprietaire findByCIN(String CIN) {
		return proprietaireRepository.findByCIN(CIN);
	}
	
	public ResponseEntity<Proprietaire> updateProprietaire(int id, Proprietaire proprietaire) {
	    Optional<Proprietaire> optionalProprietaire = proprietaireRepository.findById(id);

	    if (optionalProprietaire.isPresent()) {
	    	Proprietaire existingProprietaire = optionalProprietaire.get();
	    	existingProprietaire.setNom(proprietaire.getNom());
	    	existingProprietaire.setPrenom(proprietaire.getPrenom());
	    	existingProprietaire.setCIN(proprietaire.getCIN());
	    	
	        Proprietaire updateProprietaire = proprietaireRepository.save(existingProprietaire);
	        return ResponseEntity.ok(updateProprietaire);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	
	
}
