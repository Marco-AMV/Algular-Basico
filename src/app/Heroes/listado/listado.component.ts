import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Sentry', 'Wolverine', 'Thor', 'Daredevil'];
  heroeBorrado: string|undefined = '';

  borrarHeroe() {
    //Borra 1 elemento de la lista empezando por el primer registro
    // this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';
     

  }


}
