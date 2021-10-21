import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories = [
    {name: 'Productos', path: '/home/products'},
    {name: 'Favoritos', path: '/home/favorites'}
  ]
  isCollapsed = false;

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

  redirect(to: string) {
    if (!to) {
      this.sessionService.removeToken()
    }
    this.toggleMenu();
    this.router.navigate([to]);
  }
}
