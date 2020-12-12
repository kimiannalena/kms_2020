import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriorityPipeMock } from './priority.pipe.mock';

@NgModule({
  declarations: [PriorityPipeMock],
  imports: [
    CommonModule
  ]
})
export class PriorityModule { }
