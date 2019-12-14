import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
  show = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.getLoadingStatus().subscribe( (res: boolean) => {
      this.show = res;
    });
  }

}
