package com.hejuu.auth.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.hejuu.models.entity.Ingreso;

public interface IIngresosService {

	
	public List<Ingreso> findAll();
	public Page<Ingreso> findAll(Pageable pageable);
	public Ingreso findById(Long id);
	public Ingreso save(Ingreso ingreso);
	public void delete(Long id);
}
