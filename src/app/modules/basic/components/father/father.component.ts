import { Component } from '@angular/core';

// Interfaces
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styles: ``
})
export class FatherComponent {

  public client!: Client | undefined;

  public onSetClient(name: string): void {
    this.client = {
      id: 1,
      name
    };
  }

  public processOnDeleteClientEmitter(): void {
    this.client = undefined;
  }

  public processOnUpdateClientEmitter(client: Client): void {
    this.client = client;
  }

}
