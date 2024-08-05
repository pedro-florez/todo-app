import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

import { Todo } from './interfaces/todo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    public title: string = '💰Pagos Mensuales💰';
    public todos: Todo[] = [];

    constructor(
        private http: HttpClient,
        private decimalPipe: DecimalPipe
    ) {}

    private isFirstDayOfMonth(): boolean {
        const today = new Date();
        return today.getDate() === 1;
    }

    private saveTodos(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));

        if (this.getTotalPendingAmount() == 0) {
            localStorage.setItem('allTasksCompleted', JSON.stringify(true));
        } else {
            localStorage.setItem('allTasksCompleted', JSON.stringify(false));
        }
    }

    ngOnInit(): void {
        const storedTodos            = localStorage.getItem('todos');
        const allTasksCompletedSting = localStorage.getItem('allTasksCompleted');
        const allTasksCompleted      = allTasksCompletedSting ? JSON.parse(allTasksCompletedSting) : false;

        if ( storedTodos ) {
            this.todos = JSON.parse(storedTodos);
        }

        if ( storedTodos == null || (this.isFirstDayOfMonth() && allTasksCompleted) ) {
            this.http.get<Todo[]>('assets/data.json').subscribe( data => {
                this.todos = data;
                this.saveTodos();
            });
        }
    }

    formatCurrency(amount: number): string {
        return this.decimalPipe.transform(amount, '1.0-0', 'es-CO')?.replace('.', ',') || '';
    }

    toggleCheck(todo: Todo): void {
        todo.isCheck = !todo.isCheck;
        this.saveTodos();
    }

    getTotalPendingAmount(): number {
        return this.todos
        .filter(todo => !todo.isCheck)
        .reduce((total, todo) => total + todo.amount, 0);
    }
}
