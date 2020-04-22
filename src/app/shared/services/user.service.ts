import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class UserService {
    name = this.getSavedUser();
    auth = this.getSavedUser() ? true : false;

    addName(name: string) {
        this.name = name;
        this.auth = true;
        localStorage.setItem('name', name);
    }

    getSavedUser(): string {
        const name = localStorage.getItem('name');
        return name ? name : '';
    }
}

