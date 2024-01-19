import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTauxComponent } from './update-taux.component';

describe('UpdateTauxComponent', () => {
  let component: UpdateTauxComponent;
  let fixture: ComponentFixture<UpdateTauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTauxComponent]
    });
    fixture = TestBed.createComponent(UpdateTauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
