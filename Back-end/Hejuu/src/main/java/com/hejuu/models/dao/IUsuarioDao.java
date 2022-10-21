package com.hejuu.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.hejuu.models.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario,Long>{
	public Usuario findByUsername(String username);
}
