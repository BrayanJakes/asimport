import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColgadoresComponent } from './colgadores.component';

describe('ColgadoresComponent', () => {
  let component: ColgadoresComponent;
  let fixture: ComponentFixture<ColgadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColgadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColgadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
