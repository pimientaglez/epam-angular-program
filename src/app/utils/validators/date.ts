import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl) {
    return (crtl: AbstractControl): {[key: string]: any} | null => {
        let [day, month, year] = crtl.value.split('/');
        day = parseInt(day, 10);
        month = parseInt(month, 10);
        year = parseInt(year, 10);
        console.log(day, month, year);
        if ((day > 0 && day < 32) && (month > 0 && month < 13) && (year > 2010) ) {
            return null;
        } else {
            console.log('invalid date');
            return { date: true };
        }
    };
}
