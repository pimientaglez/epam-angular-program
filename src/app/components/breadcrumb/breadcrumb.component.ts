import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent {
  @Input() section: string;
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/courses']);
  }
}

