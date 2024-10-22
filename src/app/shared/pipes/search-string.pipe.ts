import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStringPipe',
  standalone: true
})
export class SearchStringPipe implements PipeTransform {

  transform(patientsList: any[], searchString: string): any[] {
    if (!searchString || searchString.trim() === '') {
      return patientsList;
    }
    const searchStringLowercase = searchString.toLocaleLowerCase();
    return patientsList.filter(patient => {
      const firstnameMatch = (patient?.patient_firstname || '').toLowerCase().includes(searchStringLowercase);
      const lastnameMatch = (patient?.patient_lastname || '').toLowerCase().includes(searchStringLowercase);
      const patientidMatch = (patient?.patient_id || '').toLowerCase().includes(searchStringLowercase);
      const roomNoMatch = (patient?.room_no || '').toLowerCase().includes(searchStringLowercase);
      return firstnameMatch || lastnameMatch || patientidMatch || roomNoMatch;
    });
  }
}
