import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router,
         UrlTree
         } from '@angular/router';

import { UserService } from './shared/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
      private router: Router,
      private userService: UserService,
      ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (this.checkUser()) { return true }

    const url = '';
    const tree: UrlTree = this.router.parseUrl(url);
    return tree;
  }

  checkUser(): boolean {
    if (this.userService.auth) { 
        return true;
    }

    return false;
  }
}