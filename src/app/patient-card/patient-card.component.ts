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
			doctor_name: 'Steve Smith',
			case_details: 'Sudden cardiac arrest, particularly out-of-hospital cardiac arrest (OHCA), is a global public health concern. However, limited research exists on the epidemiology of OHCAs occurring in public places, trends and impact of bystander intervention',
			medications: 'Antibiotics	Amakacin, gentamycin, vancomycin Heart medicines	Amiodarone, digoxin, lidocaine, procainamide Anti-seizure medicines	Phenobarbital, phenytoin Medicines that treat autoimmune diseases	Cyclosporine, tacrolimus'
		},
		{
			room_no: '202',
			patient_gender: 'female',
			patient_firstname: 'Isla',
			patient_lastname: 'Maxwell',
			patient_id: '2024SF202',
			patient_age: 36,
			doctor_name: 'Oliver Pointing',
			case_details: 'The conversion from a nonshockable rhythm (asystole or pulseless electrical activity (PEA)) to a shockable rhythm (pulseless ventricular tachycardia or ventricular fibrillation) may be associated with better out-of-hospital cardiac arrest (OHCA) outcomes.',
			medications: 'Antibiotics	Amakacin, gentamycin, vancomycin Heart medicines	Amiodarone, digoxin, lidocaine, procainamide Anti-seizure medicines	Phenobarbital, phenytoin Medicines that treat autoimmune diseases	Cyclosporine, tacrolimus'
		},
		{
			room_no: '203',
			patient_gender: 'male',
			patient_firstname: 'Henry',
			patient_lastname: 'Warner',
			patient_id: '2024SF203',
			patient_age: 66,
			doctor_name: 'Mitchell Starc',
			case_details: 'Extracorporeal cardiopulmonary resuscitation (ECPR) represents last-line salvage therapy for poisoning-induced cardiac arrest but no review has focused on this specific area.',
			medications: 'Antibiotics	Amakacin, gentamycin, vancomycin Heart medicines	Amiodarone, digoxin, lidocaine, procainamide Anti-seizure medicines	Phenobarbital, phenytoin Medicines that treat autoimmune diseases	Cyclosporine, tacrolimus'
		},
		{
			room_no: '204',
			patient_gender: 'male',
			patient_firstname: 'Sean',
			patient_lastname: 'Abott',
			patient_id: '2024SF204',
			patient_age: 79,
			doctor_name: 'Steve Smith',
			case_details: 'Cardiac arrest is most commonly defined as the cessation of cardiac mechanical activity requiring either delivery of chest compressions and/or defibrillation. The condition is often subdivided into in-hospital cardiac arrest (IHCA) and out-of-hospital cardiac arrest (OHCA) based on different locations, but also differences in epidemiology, natural history, co-morbidities, process of care, and provider characteristics.',
			medications: 'Antibiotics	Amakacin, gentamycin, vancomycin Heart medicines	Amiodarone, digoxin, lidocaine, procainamide Anti-seizure medicines	Phenobarbital, phenytoin Medicines that treat autoimmune diseases	Cyclosporine, tacrolimus'
		},
		{
			room_no: '205',
			patient_gender: 'female',
			patient_firstname: 'Ellyse',
			patient_lastname: 'Perry',
			patient_id: '2024SF205',
			patient_age: 49,
			doctor_name: 'Mitchell Starc',
			case_details: 'The conversion from a nonshockable rhythm (asystole or pulseless electrical activity (PEA)) to a shockable rhythm (pulseless ventricular tachycardia or ventricular fibrillation) may be associated with better out-of-hospital cardiac arrest (OHCA) outcomes.',
			medications: 'Antibiotics	Amakacin, gentamycin, vancomycin Heart medicines	Amiodarone, digoxin, lidocaine, procainamide Anti-seizure medicines	Phenobarbital, phenytoin Medicines that treat autoimmune diseases	Cyclosporine, tacrolimus'
		}
	];
	constructor(public router: Router) {
	}
	ngOnInit(): void {
		console.log(this.searchString)
	}

	openPatientDetails(patientId: any) {
		this.router.navigate(['/patient-details', patientId]);
	}
}
