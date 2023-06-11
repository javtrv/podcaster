# podcaster

App para escuchar los top 100 podcasts de iTunes

## Instalación

```
npm install
```

## Ejecución

Leer sección de notas primero.

Para el modo de desarrollo:
```
npm run dev
```

Para el modo de producción:
```
npm run build
```
Y luego para ver un preview del bundle de producción en local:
```
npm run preview
```

### Notas

Importante para el correcto funcionamiento de la app, se debe ingresar en:

```
https://cors-anywhere.herokuapp.com/corsdemo
```

y dar click al boton que dice "Request temporary access to the demo server". Esto es debido a que la API de iTunes no permite hacer peticiones desde el navegador, por lo que se debe usar un proxy para poder hacer las peticiones desde el navegador.

Luego de esto se puede correr la aplicación por primera vez.
