import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interfaces
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styles: ``
})
export class FatherSonComponent {

  @Input() public client!: Client | undefined;
  @Output() public onDeleteClientEmitter: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public onUpdateClientEmitter: EventEmitter<Client> = new EventEmitter<Client>();

  public onUpdateClient(id: number): void {
    if (!this.client) return;
    this.client = { ...this.client, id };
    this.onUpdateClientEmitter.emit(this.client);
  }

  public onDeleteClient(): void {
    this.client = undefined;
    this.onDeleteClientEmitter.emit();
  }

}
