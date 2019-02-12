import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwTeamsComponent } from './ow-teams.component';

describe('OwTeamsComponent', () => {
  let component: OwTeamsComponent;
  let fixture: ComponentFixture<OwTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
