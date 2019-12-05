import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  public duration: string;
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const h = hours > 0 ? `${hours}h` : '';

    const mins = minutes % 60;
    const m = mins > 0 ? ` ${mins}min ` : '';

    this.duration = h + m;
    return this.duration.trim();
  }

}
