import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class UserService {
    name = getSavedUser();
    auth = getSavedUser() ? true : false;

    addName(name: string) {
        this.name = name;
        this.auth = true;
        localStorage.setItem('name', name);
    }
}

function getSavedUser(): string {
    const name = localStorage.getItem('name');
    return name ? name : '';
}
