import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelBoardComponent } from './funnel-board.component';

describe('FunnelBoardComponent', () => {
  let component: FunnelBoardComponent;
  let fixture: ComponentFixture<FunnelBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnelBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
