import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosCadastroComponent } from './mercados-cadastro.component';

describe('MercadosCadastroComponent', () => {
  let component: MercadosCadastroComponent;
  let fixture: ComponentFixture<MercadosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
