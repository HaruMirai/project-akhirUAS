import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DivisiComponent } from './divisi/divisi.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    DivisiComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
