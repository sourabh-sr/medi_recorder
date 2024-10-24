import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewReadingsComponent } from './add-new-readings.component';

describe('AddNewReadingsComponent', () => {
  let component: AddNewReadingsComponent;
  let fixture: ComponentFixture<AddNewReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewReadingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
