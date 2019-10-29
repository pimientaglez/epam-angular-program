import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.sass']
})
export class LoadMoreComponent {

  constructor() { }

  loadMore(){
    console.log('Loading more courses!')
  }

}
