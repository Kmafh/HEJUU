package com.hejuu.auth.models.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hejuu.models.dao.IIngresosDao;
import com.hejuu.models.entity.Ingreso;

@Service
public class IngresosServiceImp implements IIngresosService{

	@Autowired
	private IIngresosDao ingresoDao;

	@Override
	@Transactional(readOnly=true)
	public List<Ingreso> findAll() {
		return (List<Ingreso>) ingresoDao.findAll();
	}
}
