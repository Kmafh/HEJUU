package com.hejuu.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hejuu.auth.models.services.IGastosService;
import com.hejuu.auth.models.services.IIngresosService;
import com.hejuu.models.entity.Gasto;
import com.hejuu.models.entity.Ingreso;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class GastosController {

	@Autowired
	private IGastosService gastosService;
	
	@GetMapping("/gastos")
	public List<Gasto> index(){
		return gastosService.findAll();
	}
}
