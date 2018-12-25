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

## Correr un contenedor (all-in-one)
```
docker run ubuntu
```

## Volúmenes

Montar un volumen compartido con el SO host

```
docker run
```
