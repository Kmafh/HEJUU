package com.hejuu.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="ingresos")
public class Ingreso implements Serializable{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable=false, unique=true,length=30)
	private String subject;
	@Column(nullable=false, length=10)
	private String tipe;
	private Long cant;
	@Column(name="create_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;
	@Column(name="usuarios_id")
	private Long usuarios_id;
	
	
	
	
	public Long getUsuarios_id() {
		return usuarios_id;
	}
	public void setUsuarios_id(Long usuarios_id) {
		this.usuarios_id = usuarios_id;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTipe() {
		return tipe;
	}
	public void setTipe(String tipe) {
		this.tipe = tipe;
	}
	public Long getCant() {
		return cant;
	}
	public void setCant(Long cant) {
		this.cant = cant;
	}
	public Date getCreateAt() {
		return createAt;
	}
	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
