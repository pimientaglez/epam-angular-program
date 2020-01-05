import { Component, OnInit } from '@angular/core';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.sass']
})
export class ErrorMsgComponent implements OnInit {
  errorMessage: string;

  constructor(private errorNotifierService: ErrorNotifierService) { }

  ngOnInit() {
    this.errorNotifierService.getErrorMsg().subscribe( (msg: any) => {
      if (msg instanceof HttpErrorResponse) {
        this.errorMessage = msg.error;
      } else {
        this.errorMessage = msg;
      }
    });
  }

}
