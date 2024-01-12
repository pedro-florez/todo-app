import { Component } from '@angular/core';

import { Heroe } from '../../../interfaces/heroe';
import { HEROES_LIST_FULL } from '../../../helpers/heroes';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public listHeroes:    Heroe[] = HEROES_LIST_FULL;
    public deletedHeroe?: Heroe;

    removeHeroById( id: number ): void {

        // Obtener Heroe a Eliminar
        this.deletedHeroe = this.listHeroes[id];

        // Eliminar el objeto por índice
        this.listHeroes.splice( id, 1 );
    }
}
