package org.emsi.taxe_tnb.Controller;

import org.emsi.taxe_tnb.Service.CategorieService;
import org.emsi.taxe_tnb.entities.Categorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/Categorie")
public class CategorieController {
	
	@Autowired
	CategorieService categorieService;

	@PostMapping("/save")
	public <S extends Categorie> S save(@RequestBody S entity) {
		return categorieService.save(entity);
	}

	@GetMapping("/findAll")
	public List<Categorie> findAll() {
		return categorieService.findAll();
	}

	@GetMapping("/findById/{id}")
	public Optional<Categorie> findById(@PathVariable Integer id) {
		return categorieService.findById(id);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		categorieService.deleteById(id);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Categorie> update(@PathVariable int id, @RequestBody Categorie categorie){
		return categorieService.updateCategorie(id, categorie);
	}
	
	
}
