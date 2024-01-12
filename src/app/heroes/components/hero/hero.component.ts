import { Component } from '@angular/core';
import { HEROES_LIST } from '../../../helpers/heroes';


@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {

    public nombre:           string = 'Hulk';
    public edad:             number = 27;
    public activeJumbotron:  boolean = true;

    get capitalizedName(): string {
        return this.nombre.toUpperCase();
    }

    getHeroDescription(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    changeHeroName(): void {
        const indiceAleatorio = Math.floor(Math.random() * HEROES_LIST.length);
        this.nombre = HEROES_LIST[indiceAleatorio];
    }

    changeHeroAge( valor: number ): void {
        this.edad += valor;
    }

    resetHero(): void {
        this.nombre          = 'Hulk';
        this.edad            = 27;
        this.activeJumbotron = true;
    }

    toggleJumbotron(): void {
        this.activeJumbotron = !this.activeJumbotron;
    }
}
