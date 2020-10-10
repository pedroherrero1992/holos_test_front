import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantComponent } from './mutant.component';

describe('MutantComponent', () => {
  let component: MutantComponent;
  let fixture: ComponentFixture<MutantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
