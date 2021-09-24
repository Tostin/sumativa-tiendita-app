import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEnConstruccion404Component } from './pagina-en-construccion404.component';

describe('PaginaEnConstruccion404Component', () => {
  let component: PaginaEnConstruccion404Component;
  let fixture: ComponentFixture<PaginaEnConstruccion404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEnConstruccion404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEnConstruccion404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
