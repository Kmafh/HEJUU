package com.hejuu.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class IngresosController {

	@Autowired
	private IIngresosService ingresoService;

	@GetMapping("/ingresos")
	public List<Ingreso> index() {
		return ingresoService.findAll();
	}

	@GetMapping("/ingresos/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		Ingreso ingreso = null;
		Map<String, Object> response = new HashMap<>();
		try {
			ingreso = ingresoService.findById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar consulta en BD");
			response.put("error", e.getMessage().concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		if (ingreso == null) {
			response.put("mensaje", "El ingreso ID: ".concat(id.toString().concat(" no existe")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Ingreso>(ingreso, HttpStatus.OK);
	}

	@PostMapping("/ingresos")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> create(@Valid @RequestBody Ingreso ingreso, BindingResult result) {
		Ingreso ingresoNew = new Ingreso();
		Map<String, Object> response = new HashMap<>();
		if(result.hasErrors()) {
			List<String> errors=new ArrayList<>();
			for(FieldError err: result.getFieldErrors()) {
				errors.add("El campo '"+err.getField()+"' "+err.getDefaultMessage());
			}
			response.put("errors", errors);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}
		try {
			ingresoNew.setCreateAt(new Date());
			ingresoNew = ingresoService.save(ingreso);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el ingreso en BD");
			response.put("error", e.getMessage().concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		response.put("mensaje", "El ingreso ha sido agregado con éxito");
		response.put("ingreso", ingresoNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@PutMapping("/ingresos/{id}")
	public ResponseEntity<?> update(@RequestBody Ingreso ingreso, @PathVariable Long id) {
		Ingreso ingresoActual = ingresoService.findById(id);
		Ingreso ingresoUdate = null;
		Map<String, Object> response = new HashMap<>();

		if (ingreso == null) {
			response.put("mensaje", "El ingreso ID: ".concat(id.toString().concat(" no existe.No se pudo editar.")));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		try {
			ingresoUdate.setId(ingreso.getId());
			ingresoUdate.setCant(ingreso.getCant());
			ingresoUdate.setCreateAt(ingreso.getCreateAt());
			ingresoUdate.setSubject(ingreso.getSubject());
			ingresoUdate.setTipe(ingreso.getTipe());
			ingresoUdate.setUsuarios_id((long) 1);
			ingresoUdate = ingresoService.save(ingresoUdate);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar el ingreso en BD");
			response.put("error", e.getMessage().concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}

		response.put("mensaje", "El ingreso ha sido modificado con éxito");
		response.put("ingreso", ingresoUdate);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@DeleteMapping("/ingresos/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		
		Map<String, Object> response = new HashMap<>();
		try {
		ingresoService.delete(id);
		}catch (DataAccessException e) {
			response.put("mensaje", "Error al eliminar el ingreso en BD");
			response.put("error", e.getMessage().concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}

		response.put("mensaje", "El ingreso ha sido eliminado con éxito");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
}
