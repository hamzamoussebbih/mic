package org.emsi.taxe_tnb.Controller;


import org.emsi.taxe_tnb.Service.TauxService;
import org.emsi.taxe_tnb.entities.Taux;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/Taux")
public class TauxController {
	
	@Autowired
	TauxService tauxService;

	@PostMapping("/save")
	public <S extends Taux> S save(@RequestBody S entity) {
		return tauxService.save(entity);
	}
	
	@GetMapping("/findAll")
	public List<Taux> findAll() {
		return tauxService.findAll();
	}

	@GetMapping("/findById/{id}")
	public Optional<Taux> findById(@PathVariable Integer id) {
		return tauxService.findById(id);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		tauxService.deleteById(id);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Taux> update(@PathVariable int id, @RequestBody Taux taux){
		return tauxService.updateTaux(id, taux);
	}
}
