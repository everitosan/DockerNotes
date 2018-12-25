## Contenedores  

Mostrar los contenedores de docker (contenedores corriendo)

```
docker ps
```

Mostrar los contenedores de docker (incluye terminados)

```
docker ps -a
```

Mostrar solo ids de todos los contenedores en Docker
```
docker ps -aq
```

Eliminar un contenedor
```
docker rm -f [id_del_contnedor | nombre_del_contenedor]
```

Eliminar todos los contendores
```
docker rm -f $(docker ps -aq)
```

Correr un contenedor (all-in-one)
```
docker run ubuntu
```

Correr un volumen asignando nombre
```
docker run --name [CONTAINER_NAME] ubuntu
```

Correr contenedor de forma interactiva
```
docker run -it ubuntu /bin/bash
```

## Puertos
Port forwarding de nuestro SO Host a el contenedor
```
docker run -p [CONTAINER_PORT]:[HOST_POST]
```

## Volúmenes

Montar un volumen compartido con el SO host

```
docker run -v [HOST_DIR]:[CONTAINER_DIR] ubuntu
```

Crear un volumen y montarlo en el contenedor

```
docker volume create [VOLUME_NAME]
docker run --mount src=[VOLUME_NAME],dst=[CONTAINER_DIR]
```

