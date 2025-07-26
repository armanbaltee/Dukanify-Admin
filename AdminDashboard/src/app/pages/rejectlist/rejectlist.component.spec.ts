import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectlistComponent } from './rejectlist.component';

describe('RejectlistComponent', () => {
  let component: RejectlistComponent;
  let fixture: ComponentFixture<RejectlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectlistComponent]
    });
    fixture = TestBed.createComponent(RejectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
