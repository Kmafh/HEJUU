package com.hejuu.auth;

import java.util.HashMap;
import java.util.Map;

import com.hejuu.models.entity.Usuario;
import com.hejuu.services.UsuarioServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;


@Component
public class InfoAdicionalToken implements TokenEnhancer{

	@Autowired
	private UsuarioServer usuarioService;

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {

		Usuario usuario = usuarioService.findByUsername(authentication.getName());
		Map<String, Object> info = new HashMap<>();
		info.put("info_adicional", "Hola que tal!: ".concat(authentication.getName()));

		info.put("username", usuario.getUsername());
		info.put("pass", usuario.getPassword());
		info.put("roles", usuario.getRoles());

		((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);

		return accessToken;
	}

}
