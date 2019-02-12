import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolTeamsComponent } from './lol-teams.component';

describe('LolTeamsComponent', () => {
  let component: LolTeamsComponent;
  let fixture: ComponentFixture<LolTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
