import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientadoresComponent } from './ambientadores.component';

describe('AmbientadoresComponent', () => {
  let component: AmbientadoresComponent;
  let fixture: ComponentFixture<AmbientadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
