import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurstomDateComponent } from './curstom-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CurstomDateComponent', () => {
  let component: CurstomDateComponent;
  let fixture: ComponentFixture<CurstomDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurstomDateComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurstomDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
