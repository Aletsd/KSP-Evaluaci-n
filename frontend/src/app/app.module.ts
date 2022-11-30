import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DataTableComponent,
  DialogAnimationsExampleDialog,
} from './components/data-table/data-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { ExporterService } from './services/exporter.service';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployedComponent } from './components/employed/employed.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DialogAnimationsExampleDialog,
    EmployedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [ExporterService],
  bootstrap: [AppComponent, DataTableComponent],
})
export class AppModule {}
