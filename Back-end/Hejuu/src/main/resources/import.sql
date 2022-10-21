INSERT INTO `user`(username,password,enabled) VALUES ('Andres','$2a$10$70ANj4NT2Dw9j48cQBcDF.gxT5E4lUzGkcViFe6mneILRVmQM3b8u',1);
INSERT INTO `user`(username,password,enabled) VALUES ('admin','$2a$10$w9L00SBKeaAjx1ru58cZju0rdZbQ5P1B9SxMPvF6LFSIXVK6ytbni',1);

INSERT INTO `roles`(rolename) VALUES ('ROLE_USER');
INSERT INTO `roles`(rolename) VALUES ('ROLE_ADMIN');

INSERT INTO `user_roles`(usuarios_id,roles_id) VALUES (1,1);
INSERT INTO `user_roles`(usuarios_id,roles_id) VALUES (2,2);
INSERT INTO `user_roles`(usuarios_id,roles_id) VALUES (2,1);