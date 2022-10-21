package com.hejuu.auth.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hejuu.models.dao.IGastoDao;
import com.hejuu.models.entity.Gasto;

@Service
public class GastosServiceImp implements IGastosService{

	@Autowired
	private IGastoDao gastosDao;

	@Override
	@Transactional(readOnly=true)
	public List<Gasto> findAll() {
		return (List<Gasto>) gastosDao.findAll();
	}
}
