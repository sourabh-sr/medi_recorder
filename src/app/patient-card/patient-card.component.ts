import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';

@Component({
	selector: 'app-patient-card',
	standalone: true,
	imports: [CommonModule, SharedModule],
	templateUrl: './patient-card.component.html',
	styleUrl: './patient-card.component.scss'
})
export class PatientCardComponent {

	constructor(public router: Router) { }

	openPatientDetails() {
		this.router.navigate(['/patient-details']);
	}
}
