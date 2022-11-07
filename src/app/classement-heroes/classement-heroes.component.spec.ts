import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementHeroesComponent } from './classement-heroes.component';

describe('ClassementHeroesComponent', () => {
  let component: ClassementHeroesComponent;
  let fixture: ComponentFixture<ClassementHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassementHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
