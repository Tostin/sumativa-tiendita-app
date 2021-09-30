import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductohijoComponent } from './productohijo.component';

describe('ProductohijoComponent', () => {
  let component: ProductohijoComponent;
  let fixture: ComponentFixture<ProductohijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductohijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductohijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
