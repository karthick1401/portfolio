import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioSectionComponent } from './protfolio-section.component';

describe('ProtfolioSectionComponent', () => {
  let component: ProtfolioSectionComponent;
  let fixture: ComponentFixture<ProtfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfolioSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
