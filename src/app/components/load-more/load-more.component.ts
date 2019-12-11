import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.sass']
})
export class LoadMoreComponent {
  @Output() loadMore: EventEmitter<boolean> = new EventEmitter<boolean>();

  load() {
    console.log('loading more courses')
    this.loadMore.emit(true);
  }

}
