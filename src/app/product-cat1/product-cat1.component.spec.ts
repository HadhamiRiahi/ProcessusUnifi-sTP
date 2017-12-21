import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCat1Component } from './product-cat1.component';

describe('ProductCat1Component', () => {
  let component: ProductCat1Component;
  let fixture: ComponentFixture<ProductCat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
