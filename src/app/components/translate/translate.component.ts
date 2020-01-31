import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.sass']
})
export class TranslateComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  selectLanguage(event) {
    this.translate.use(event.target.value);
  }
}
