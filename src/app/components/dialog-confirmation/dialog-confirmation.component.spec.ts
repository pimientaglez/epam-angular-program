import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { DialogConfirmationComponent } from './dialog-confirmation.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

const TEST_DIRECTIVES = [
  DialogConfirmationComponent
];

@NgModule({
  imports: [MatDialogModule ],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    DialogConfirmationComponent
  ],
})
class DialogTestModule { }

describe('DialogConfirmationComponent', () => {
  let component: DialogConfirmationComponent;
  let fixture: ComponentFixture<DialogConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DialogTestModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
