import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>
            <b>Contador:</b> {{ counter }}
        </p>

        <button
        class="btn btn-primary"
        (click)="incrementar()">
            Agregar
        </button>

        <button
        class="btn btn-danger ms-3"
        (click)="decrementar()"
        [disabled]="disabled">
            Quitar
        </button>

        <button
        class="btn btn-success ms-3"
        (click)="reiniciar()">
            Reiniciar
        </button>
    `
})

export class CounterComponent {

    public counter:  number = 0;
    public disabled: boolean = true;

    incrementar(): void {

        if ( this.counter >= 0 ) {
            this.disabled = false;
        }

        this.counter += 1
    }

    decrementar(): void {

        let nuevoValor: number = this.counter - 1;

        if ( nuevoValor >= 0 ) {
            this.counter = nuevoValor;

        }

        if ( nuevoValor == 0 ) {
            this.disabled = true;
        }
    }

    reiniciar(): void {
        this.counter = 0;
        this.disabled = true;
    }
}
