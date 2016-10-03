import {
  ComponentRef,
  ViewContainerRef,
  Injectable,
  Injector,
  ComponentFactoryResolver
} from '@angular/core';

import { SohoModalDialogRef } from './soho-modal-dialog.ref';
import { SohoModalDialogInjector } from './soho-modal-dialog.injector';

/**
 * This service is used to create a modal dialog, based on the content
 * of an Angular Componnent on the screen.
 *
 * todo layers?
 */
@Injectable()
export class SohoModalDialogService {
  /**
   * Constructor.
   *
   * @param componentFactoryResolver - used to create component factories for components dynamically.
   * @param injector - the current in scope injector, use as a delegate.
   */
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
  }

  /**
   * Creates a modal dialog defined by the given component, returning a reference to the
   * dialog that can be interacted with.
   *
   * The component has the potential to include the dialog reference when it is
   * instantiated, as a provider.
   *
   * The dialog won't necessarily be open yet, see the dialog ref api for further methods.
   *
   * @return the model dialog reference.
   */
  modal<T>(component: ComponentType<T>, parent: ViewContainerRef): SohoModalDialogRef<T> {
    let modalDialogRef = new SohoModalDialogRef(component);
    const dialogInjector = new SohoModalDialogInjector(modalDialogRef, this.injector);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const instance: ComponentRef<T> = parent.createComponent<T>(componentFactory,
        parent.length, dialogInjector || this.injector);

    // Store the refernce in the dialog reference.
    modalDialogRef.componentInstance = instance;
    return modalDialogRef;
  }

  /** todo implement a string content based version, not using a component. */
}

/**
 * Something with a new methods returning a type T.
 */
export interface ComponentType<T> {
  new (...args: any[]): T;
}
