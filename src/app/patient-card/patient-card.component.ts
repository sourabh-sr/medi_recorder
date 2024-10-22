import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { SearchStringPipe } from '../shared/pipes/search-string.pipe';

@Component({
	selector: 'app-patient-card',
	standalone: true,
	imports: [CommonModule, SharedModule, SearchStringPipe],
	templateUrl: './patient-card.component.html',
	styleUrl: './patient-card.component.scss'
})
export class PatientCardComponent implements OnInit {

	@Input() searchString: any;

	patientsList: any = [
		{
			room_no: '201',
			patient_gender: 'male',
			patient_firstname: 'John',
			patient_lastname: 'Wick',
			patient_id: '2024SF201',
			patient_age: 54,
			doctor_name: 'Steve Smith'
		},
		{
			room_no: '202',
			patient_gender: 'female',
			patient_firstname: 'Isla',
			patient_lastname: 'Maxwell',
			patient_id: '2024SF201',
			patient_age: 36,
			doctor_name: 'Oliver Pointing'
		},
		{
			room_no: '203',
			patient_gender: 'male',
			patient_firstname: 'Henry',
			patient_lastname: 'Warner',
			patient_id: '2024SF201',
			patient_age: 66,
			doctor_name: 'Mitchell Starc'
		},
		{
			room_no: '204',
			patient_gender: 'male',
			patient_firstname: 'Sean',
			patient_lastname: 'Abott',
			patient_id: '2024SF201',
			patient_age: 79,
			doctor_name: 'Steve Smith'
		},
		{
			room_no: '205',
			patient_gender: 'female',
			patient_firstname: 'Ellyse',
			patient_lastname: 'Perry',
			patient_id: '2024SF201',
			patient_age: 49,
			doctor_name: 'Mitchell Starc'
		}
	];
	constructor(public router: Router) {
	}
	ngOnInit(): void {
		console.log(this.searchString)
	}

	openPatientDetails() {
		this.router.navigate(['/patient-details']);
	}
}
