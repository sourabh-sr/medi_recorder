import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule, FlexLayoutModule, SharedModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {

	userName: string = '';
	password: string = '';
	isError: boolean = false;
	loginCreds: any = [{ user: 'nurse', pwd: 'nurse' }, { user: 'nurse2', pwd: 'nurse2' }, { user: 'admin', pwd: 'admin' }]
	constructor(public router: Router) {

	}

	login() {
		const user = this.loginCreds.find((cred: any) => cred.user === this.userName && cred.pwd === this.password);
		if (user) {
			this.isError = false;
			this.router.navigate(['/dashboard']);
		} else {
			this.isError = true;
		}
	}

	navigateToAdminScreen() {
		this.router.navigate(['/admin-dashboard']);
	}
}
