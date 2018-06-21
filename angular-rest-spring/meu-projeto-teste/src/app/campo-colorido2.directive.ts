import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido2]',
  exportAs: 'campoColorido'
})
export class CampoColorido2Directive {

  //@Input() cor = 'gray';
  @Input('appCampoColorido2') cor = 'gray';

  @HostBinding('style.backgroundColor') corDefundo: string;

  @HostListener('focus') colorir() {
    this.corDefundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDefundo = 'transparent';
  }
}
