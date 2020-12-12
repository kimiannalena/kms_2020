import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipeMock } from './search-filter.pipe.mock';

@NgModule({
  declarations: [SearchFilterPipeMock],
  imports: [
    CommonModule
  ]
})
export class SearchFilterModule { }
