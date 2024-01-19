package org.emsi.taxe_tnb.Controller;


import org.emsi.taxe_tnb.Service.TerrainService;
import org.emsi.taxe_tnb.entities.Terrain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/Terrain")
public class TerrainController {
	
	@Autowired
	TerrainService terrainService;

	
	@PostMapping("/save")
	public <S extends Terrain> S save(@RequestBody S entity) {
		return terrainService.save(entity);
	}

	@GetMapping("/findAll")
	public List<Terrain> findAll() {
		return terrainService.findAll();
	}

	@GetMapping("/findById/{id}")
	public Optional<Terrain> findById(@PathVariable Integer id) {
		return terrainService.findById(id);
	}

	@DeleteMapping("/daleteById/{id}")
	public void deleteById(@PathVariable Integer id) {
		terrainService.deleteById(id);
	}
	
	@GetMapping("/nom/{terrainId}/details")
    public List<Object[]> getNomByTerrainId(@PathVariable int terrainId) {
        return terrainService.getNomByTerrainId(terrainId);
    }
    
    @GetMapping("/type/{terrainId}/details")
    public List<Object[]> getTypeByTerrainId(@PathVariable int terrainId){
    	return terrainService.getTypeByTerrainId(terrainId);
    }
	@GetMapping("/calculateTax")
	public ResponseEntity<Double> calculateAndSaveTax(
			@RequestParam(name = "terrainId") int terrainId,
			@RequestParam(name = "year") int year) {
		double taxe = terrainService.calculateAndSaveTax(terrainId, year);
		return ResponseEntity.ok(taxe);
	}
}
