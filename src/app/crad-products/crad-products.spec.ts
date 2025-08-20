import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CradProducts } from './crad-products';

describe('CradProducts', () => {
  let component: CradProducts;
  let fixture: ComponentFixture<CradProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CradProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CradProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
