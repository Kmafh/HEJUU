package com.hejuu.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
public class ResourceServeConfig extends ResourceServerConfigurerAdapter{

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/ingresos","/api/ingresos/page/**").permitAll()
		.antMatchers(HttpMethod.GET,"/api/ingresos/{id}").hasAnyRole("USER","ADMIN")
		.antMatchers(HttpMethod.POST,"/api/ingresos/{id}").hasRole("ADMIN")
		.antMatchers("/api/ingresos/**").hasRole("ADMIN")
		.anyRequest().authenticated();
	}
	
	
}
