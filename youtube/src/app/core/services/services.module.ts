import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { SearchService } from './search.service';
import { StorageService } from './storage.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [DataService, SearchService, AuthService, StorageService],
})
export class ServicesModule {}
