import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsorbeOloresComponent } from './absorbe-olores.component';

describe('AbsorbeOloresComponent', () => {
  let component: AbsorbeOloresComponent;
  let fixture: ComponentFixture<AbsorbeOloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsorbeOloresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsorbeOloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
