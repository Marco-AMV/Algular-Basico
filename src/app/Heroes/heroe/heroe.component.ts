import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',

})
export class HeroeComponent{

    nombre: string = 'Sentry';
    edad  : number = 32;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${ this.edad}`;

    }

    cambiarNombre(): void {
        this.nombre = 'Hulk';

    }

    cambiarEdad(): void {
        this.edad = 50;
    }
}