import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';
import { By } from '@angular/platform-browser';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call loadMore method', () => {
    const spy = spyOn(component, 'load');
    fixture.debugElement.query(By.css('.load-more-text')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
  it('should call console.log method', () => {
    const consoleSpy = spyOn(console, 'log');
    component.load();
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
