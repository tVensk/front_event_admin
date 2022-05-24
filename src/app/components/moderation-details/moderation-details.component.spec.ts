import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationDetailsComponent } from './moderation-details.component';

describe('ModerationDetailsComponent', () => {
  let component: ModerationDetailsComponent;
  let fixture: ComponentFixture<ModerationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
