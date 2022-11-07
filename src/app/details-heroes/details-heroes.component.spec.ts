import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHeroesComponent } from './details-heroes.component';

describe('DetailsHeroesComponent', () => {
  let component: DetailsHeroesComponent;
  let fixture: ComponentFixture<DetailsHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
