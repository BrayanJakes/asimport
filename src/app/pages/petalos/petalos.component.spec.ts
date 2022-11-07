import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetalosComponent } from './petalos.component';

describe('PetalosComponent', () => {
  let component: PetalosComponent;
  let fixture: ComponentFixture<PetalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetalosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
