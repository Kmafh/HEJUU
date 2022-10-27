package com.hejuu.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hejuu.models.entity.Ingreso;

public interface IIngresosDao extends JpaRepository<Ingreso,Long>{

	
}
