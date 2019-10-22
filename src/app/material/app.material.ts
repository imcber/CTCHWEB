import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ButtonsModule,
    WavesModule,
    CollapseModule
  ],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ButtonsModule,
    WavesModule,
    CollapseModule],
})
export class material { }