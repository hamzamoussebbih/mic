package org.emsi.taxe_tnb.Controller;

import org.emsi.taxe_tnb.Service.ProprietaireService;
import org.emsi.taxe_tnb.entities.Proprietaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")	
@RestController
@RequestMapping("/proprietaire")
public class ProprietaireController {
	
	@Autowired
	ProprietaireService proprietaireService;
	

	
	@PostMapping("/save")
	public <S extends Proprietaire> S save(@RequestBody S entity) {
		return proprietaireService.save(entity);
	}

	@GetMapping("/findAll")
	public List<Proprietaire> findAll(Sort sort) {
		return proprietaireService.findAll(sort);
	}
	
	@GetMapping("/findById/{id}")
	public Optional<Proprietaire> findById(@PathVariable Integer id) {
		return proprietaireService.findById(id);
	}

	@DeleteMapping("/deleteById/{id}")
	public void deleteById(@PathVariable Integer id) {
		proprietaireService.deleteById(id);
	}

	@GetMapping("/findByCin/{CIN}")
	public Proprietaire findByCin(@PathVariable String CIN) {
		return proprietaireService.findByCIN(CIN);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Proprietaire> update(@PathVariable int id, @RequestBody Proprietaire proprietaire){
		return proprietaireService.updateProprietaire(id, proprietaire);
	}
	
}
