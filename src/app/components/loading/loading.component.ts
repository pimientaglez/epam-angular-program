import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit, OnDestroy {
  show = false;
  private subscription: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.subscription = this.loadingService.getLoadingStatus().subscribe( (res: boolean) => {
      this.show = res;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
