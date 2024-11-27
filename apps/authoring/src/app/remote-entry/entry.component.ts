import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-authoring-authoring-entry',
  template: `Authoring Tool <router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
