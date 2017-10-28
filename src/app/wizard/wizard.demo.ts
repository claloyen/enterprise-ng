import {
  Component,
  QueryList,
  AfterViewInit,
  ViewChild,
  Inject,
  ContentChild
} from '@angular/core';

import {
  SohoWizardComponent,
  SohoProgressComponent,
  SohoToastService
} from '@infor/sohoxi-angular';

import { WizardDemoResultPageComponent } from './wizard-result-page.demo';

@Component({
  selector: 'soho-wizard-demo',
  templateUrl: './wizard.demo.html',
})
export class WizardDemoComponent  {
  @ViewChild(SohoWizardComponent) wizard: SohoWizardComponent;

  // buttons = [
  //   {id: 'prevous', text: Locale.translate('Previous'), click: () => { this.wizard.previous(); }},
  //   {id: 'next', text: Locale.translate('Next'), click: () => { this.wizard.next(); }, isDefault: true},
  //   {id: 'finish', text: Locale.translate('Finish'), click: () => { this.wizard.finish(); }},
  // ];

  // public ticks: SohoWizardTick[] = [
  //   { label: 'Select Files', href: 'select-files', state: 'current'},
  //   { label: 'Target Folder', href: 'target-folder'},
  //   { label: 'Backup Rules', href: 'backup-rule'},
  //   { label: 'Validation', href: 'validation-rule'},
  //   { label: 'Confirmation', href: 'confirmation'},
  //   { label: 'Result', href: 'result'}
  // ];

  constructor(private toastService: SohoToastService) {
  }

  onActivated(e: SohoWizardEvent) {
    console.log('The tick with the label e.tick.text()');
  }
}
