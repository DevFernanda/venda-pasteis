import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaPasteisComponent } from './venda-pasteis.component';

describe('VendaPasteisComponent', () => {
  let component: VendaPasteisComponent;
  let fixture: ComponentFixture<VendaPasteisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaPasteisComponent]
    });
    fixture = TestBed.createComponent(VendaPasteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
