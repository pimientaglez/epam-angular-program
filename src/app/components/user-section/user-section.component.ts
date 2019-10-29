import { Component } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass']
})
export class UserSectionComponent {
  public id:number;
  public firstName:string;
  public lastName:string;

}
