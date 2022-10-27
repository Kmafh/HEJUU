package com.hejuu.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.hejuu.models.entity.Ingreso;

public interface IIngresosDao extends JpaRepository<Ingreso,Long>{

	
}
