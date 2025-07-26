import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivelistComponent } from './activelist.component';

describe('ActivelistComponent', () => {
  let component: ActivelistComponent;
  let fixture: ComponentFixture<ActivelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivelistComponent]
    });
    fixture = TestBed.createComponent(ActivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
