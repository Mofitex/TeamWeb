import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolPlayersComponent } from './lol-players.component';

describe('LolPlayersComponent', () => {
  let component: LolPlayersComponent;
  let fixture: ComponentFixture<LolPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
