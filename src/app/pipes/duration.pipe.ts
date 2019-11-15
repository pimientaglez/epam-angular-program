import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  public duration: string;
  transform(minutes: number): string {
    let hours = Math.floor(minutes / 60);
    let h = hours > 0? `${hours}h ` : '';

    let mins = minutes % 60;
    let m = mins > 0? ` ${mins}min ` : '';

    this.duration = h+m
    return this.duration.trim();
  }

}
