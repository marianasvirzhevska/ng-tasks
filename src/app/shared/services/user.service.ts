import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
    name: string;
    auth: boolean;

    constructor() {
        this.name = this.getSavedUser();
        this.auth = !!this.name;
    }

    getSavedUser(): string {
        const name = localStorage.getItem('name');
        return name ? name : '';
    }

    addName(name: string): void {
        this.name = name;
        this.auth = true;
        localStorage.setItem('name', name);
    }
}

