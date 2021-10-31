import { Subscription } from 'rxjs';
import { AuthService } from './../../pages/login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  mostrarMenu: boolean = false;
  menuSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.menuSubscription = this.authService.mostrarMenuEmitter.subscribe((mostrar) => {
      this.mostrarMenu = mostrar
    })
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

}
