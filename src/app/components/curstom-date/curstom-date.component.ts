import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-curstom-date',
  templateUrl: './curstom-date.component.html',
  styleUrls: ['./curstom-date.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurstomDateComponent),
      multi: true,
    }
  ]
})
export class CurstomDateComponent implements ControlValueAccessor {
  date = '';

  constructor() { }
  onChange = (value) => {
    this.date = value;
  }
  onTouched: any = () => { };
  writeValue(value): void {
    this.date = value;
    this.onChange(this.date);
  }
  registerOnChange(fn: (value) => {}): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  validate(c: FormControl) {
    const [day, month, year] = this.date.split('/');
    const newDay = parseInt(day, 10);
    const newMonth = parseInt(month, 10);
    const newYear = parseInt(year, 10);
    console.log(day, month, year);
    if ((newDay > 0 && newDay < 32) && (newMonth > 0 && newMonth < 13) && (newYear > 2010) ) {
        return null;
    } else {
        console.log('invalid date');
        return {date: true};
    }
  }
}
