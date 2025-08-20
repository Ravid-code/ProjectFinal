import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaeProduct } from './pgae-product';

describe('PgaeProduct', () => {
  let component: PgaeProduct;
  let fixture: ComponentFixture<PgaeProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgaeProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgaeProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
