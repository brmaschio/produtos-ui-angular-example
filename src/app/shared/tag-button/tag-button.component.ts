import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tag-button',
  templateUrl: './tag-button.component.html',
  styleUrls: ['./tag-button.component.scss']
})
export class TagButtonComponent {

  @Input() onLabel = 'Ativo';
  @Input() offLabel = 'Inativo';
  @Input() tooltipOn = 'Ativar';
  @Input() tooltipOff = 'Desativar';
  @Input() value = 'ATIVO';
  @Input() defaultValue = 'ATIVO';
  @Input() otherValue = 'INATIVO';

  @Output() alterValue = new EventEmitter();

  alterValueEvent() {

    const newValue = this.value !== this.defaultValue ? this.defaultValue : this.otherValue;

    this.value = newValue;

    this.alterValue.emit(this.value);

  }


}
