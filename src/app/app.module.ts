import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { AufgabenKarteComponent } from './aufgaben-karte/aufgaben-karte.component';
import { AufgabenSendenComponent } from './aufgaben-senden/aufgaben-senden.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { KursComponent } from './kurs/kurs.component';
import { LehrerAufgabenComponent } from './lehrer/lehrer-aufgaben/lehrer-aufgaben.component';
import { LoginComponent } from './login/login.component';
import { MeineAufgabenComponent } from './meine-aufgaben/meine-aufgaben.component';
import { SendenErfolgreichComponent } from './senden-erfolgreich/senden-erfolgreich.component';
import { LueckentextComponent } from './aufgaben-karte/lueckentext/lueckentext.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AufgabenComponent,
    AufgabenKarteComponent,
    AufgabenSendenComponent,
    SendenErfolgreichComponent,
    MeineAufgabenComponent,
    LehrerAufgabenComponent,
    LoginComponent,
    KursComponent,
    LueckentextComponent,
    TestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'kurs/:name', component: KursComponent },
      { path:'aufgaben', component: AufgabenComponent },
      { path:'aufgaben-karte', component: AufgabenKarteComponent },
      { path:'aufgaben-senden', component: AufgabenSendenComponent },
      { path:'senden-erfolgreich', component: SendenErfolgreichComponent },
      { path:'login', component: LoginComponent},
      { path:'lehrer/aufgaben', component: LehrerAufgabenComponent }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
