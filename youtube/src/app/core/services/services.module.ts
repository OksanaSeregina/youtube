import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SearchService } from './search.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [DataService, SearchService],
})
export class ServicesModule {}
