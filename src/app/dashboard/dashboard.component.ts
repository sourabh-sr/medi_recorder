import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    SharedModule,
    CommonModule,
    PatientCardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  searchString: any;

  constructor(public router: Router) {
  }
  logout() {
    this.router.navigate(['/login']);

  }
}
