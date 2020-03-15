import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Ay7agaComponent } from './ay7aga/ay7aga.component';
import { SearchPipe } from './search.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SeemorePipe } from './seemore.pipe';
import { EditpostComponent } from './editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    Ay7agaComponent,
    SearchPipe,
    SeemorePipe,
    EditpostComponent
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
