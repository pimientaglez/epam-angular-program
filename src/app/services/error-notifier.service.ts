import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotifierService {
  private errorMsg: Subject<string> = new Subject<string>();

  constructor() { }

  setErrorMsg(msg: string): void {
    this.errorMsg.next(msg);
  }

  getErrorMsg(): Observable<string> {
    return this.errorMsg.asObservable();
  }
}
