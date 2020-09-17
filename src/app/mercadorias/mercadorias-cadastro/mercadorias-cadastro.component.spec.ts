import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriasCadastroComponent } from './mercadorias-cadastro.component';

describe('MercadoriasCadastroComponent', () => {
  let component: MercadoriasCadastroComponent;
  let fixture: ComponentFixture<MercadoriasCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoriasCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoriasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
