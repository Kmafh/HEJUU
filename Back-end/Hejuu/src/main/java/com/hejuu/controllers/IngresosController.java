package com.hejuu.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
