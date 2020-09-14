import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosPesquisaComponent } from './mercados-pesquisa.component';

describe('MercadosPesquisaComponent', () => {
  let component: MercadosPesquisaComponent;
  let fixture: ComponentFixture<MercadosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
