import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTerrainComponent } from './update-terrain.component';

describe('UpdateTerrainComponent', () => {
  let component: UpdateTerrainComponent;
  let fixture: ComponentFixture<UpdateTerrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTerrainComponent]
    });
    fixture = TestBed.createComponent(UpdateTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
