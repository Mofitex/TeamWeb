import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwPlayersComponent } from './ow-players.component';

describe('OwPlayersComponent', () => {
  let component: OwPlayersComponent;
  let fixture: ComponentFixture<OwPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
