package com.hejuu.auth.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
	@Override
	@Transactional(readOnly=true)
	public Page<Ingreso> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return ingresoDao.findAll(pageable);
	}
	
	@Override
	@Transactional(readOnly=true)
	public Ingreso findById(Long id) {
		
		return ingresoDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Ingreso save(Ingreso ingreso) {
		// TODO Auto-generated method stub
		return ingresoDao.save(ingreso);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		ingresoDao.deleteById(id);
		
	}

	
}
