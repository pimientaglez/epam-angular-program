import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass']
})
export class UserSectionComponent implements User {
  public id:number;
  public firstName:string;
  public lastName:string;
  
  constructor() { }

  ngOnInit() {
  }

}
