import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
