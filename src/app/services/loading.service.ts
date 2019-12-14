import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingStatus: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setLoadingStatus(status: boolean): void {
    this.loadingStatus.next(status);
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loadingStatus.asObservable();
  }
}
