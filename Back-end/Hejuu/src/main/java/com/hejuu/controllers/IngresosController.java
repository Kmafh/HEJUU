package com.hejuu.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hejuu.auth.models.services.IIngresosService;
import com.hejuu.models.entity.Ingreso;

@RestController
@RequestMapping("/api")
public class IngresosController {

	@Autowired
	private IIngresosService ingresoService;
	
	@GetMapping("/ingresos")
	public List<Ingreso> index(){
		return ingresoService.findAll();
	}
	
	@GetMapping("/ingresos/{id}")
	public Ingreso show(@PathVariable Long id) {
		return ingresoService.findById(id);
	}
	
	@PostMapping("/ingresos")
	@ResponseStatus(HttpStatus.CREATED)
	public Ingreso create(@RequestBody Ingreso ingreso) {
		ingreso.setCreateAt(new Date());
		return ingresoService.save(ingreso);
	}
	
	@PutMapping("/ingresos/{id}")
	public Ingreso update(@RequestBody Ingreso ingreso,@PathVariable Long id) {
		Ingreso ingresoActual = ingresoService.findById(id);
		ingresoActual.setId(ingreso.getId());
		ingresoActual.setCant(ingreso.getCant());
		ingresoActual.setCreateAt(ingreso.getCreateAt());
		ingresoActual.setSubject(ingreso.getSubject());
		ingresoActual.setTipe(ingreso.getTipe());
		
		return ingresoService.save(ingresoActual);
	}
	
	@DeleteMapping("/ingresos/{id}")
	public void delete(@PathVariable Long id) {
		ingresoService.delete(id);
	}
}
