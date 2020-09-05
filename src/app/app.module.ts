import { HomeService } from './home.service';
import { TestServiceService } from './test-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule }     from '@angular/material/input'  ;
import { MatFormFieldModule}  from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule

  ],
  providers: [TestServiceService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
