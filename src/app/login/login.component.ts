import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule, FlexLayoutModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	constructor(public router: Router) {

	}

	login() {
		this.router.navigate(['/dashboard']);
	}

	navigateToAdminScreen() {
		this.router.navigate(['/admin-dashboard']);
	}
}
