package com.hejuu.auth.models.services;

import java.util.List;

import com.hejuu.models.entity.Ingreso;

public interface IIngresosService {

	
	public List<Ingreso> findAll();
	public Ingreso findById(Long id);
	public Ingreso save(Ingreso ingreso);
	public void delete(Long id);
}
