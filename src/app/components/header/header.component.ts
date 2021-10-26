import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/store/actions/profile.actions';
import { selectProfileName } from 'src/app/store/selectors/profile.selectors';
import { AppState } from 'src/app/store/state/app.state';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  categories = [
    {name: 'Productos', path: '/home/products'},
    {name: 'Favoritos', path: '/home/favorites'}
  ]
  isCollapsed = false;
  userName: Observable<string | undefined>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.userName = this.store.select(selectProfileName)
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

  redirect(to: string) {
    if (!to) {
      this.store.dispatch(logout());
    }
    this.toggleMenu();
    this.router.navigate([to]);
  }
}
