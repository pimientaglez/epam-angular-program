import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchtextService {
  private searchText: Subject<string> = new Subject<string>();

  constructor() { }

  setSearchText(text: string):void{
    this.searchText.next(text);
  }

  getSearchText(){
    return this.searchText.asObservable();
  }
}
