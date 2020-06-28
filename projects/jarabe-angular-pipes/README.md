# JarabeAngularPipes

## Install

```bash
npm i jarabe-angular-pipes
```

## Import

```javascript
 //en el module

import { JarabeAngularPipesModule } from 'jarabe-angular-pipes';

@NgModule({
  imports: [
    JarabeAngularPipesModule
  ]
})

```

## Uso jarabeFilter pipe

Declaras el config en el TS algo asi:

```javascript
//Teniendo un array de objetos algo asi
let Users = [{
    name: 'Fernando',
    address: 'calle siempre viva 22',
    category: {
      name: 'El mejor'
    }
  },
  {
    name: 'German',
    address: 'casa rosa 22',
    category: {
      name: 'Regular'
    }
  }
]

// la configuracion seria de esta forma
let filterConfig = ['name','category/name','address']
```

Ya en html:

```html
 <input placeholder="Buscar usuario" type="text"
 [(ngModel)]="filterTxt">

<div *ngFor="let user of users | jarabeFilter:filterTxt:filterConfig;"></div>
```

## Uso jarabeImage pipe

Para angular 9 con full UploadedFile usar la ultima version
Para angular 9 usar la version 0.1.2
Para angular 7-8 usar la version 0.0.5

En la version 0.2.X es directo el objeto de UploadedFile

```html
 <img [src]="user.profileImage|jarabeImage:'':api"/>
```

En la version 0.1.2 hacia abajo es algo como

```html
 <img [src]="user.profileImage.URL|jarabeImage:'':api"/>
```

Al mandar llamar una imagen solo tenemos que agregarlo como pipe, el primer parametro es el `tamaño`

Como tamaños aceptados estan:

- `` (vacio es la original)
- avatar
- thumb
- small
- medium
- large

El segundo parametro es el `ApiService` de jarabe

## Referencia

El uploadedFile tiene una estructura algo asi:

```javascript
//Ejemplo de uploaded file object (version 0.2.X)
    {
        URL:"https://prueba.com/imagen.jpg",
        resize:true
    }
```

## Dependencias

Depende directamente de [jarabe-loopback-image](https://www.npmjs.com/package/jarabe-loopback-image)
