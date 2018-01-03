import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadoComponent} from './empleado/empleado.component'
import { Homecomponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/conches.components';
import { PlatillasComponent } from './plantillas/plantillas.component'

@NgModule({
  declarations: [
    AppComponent, 
    FrutaComponent,
    empleadoComponent,
    Homecomponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlatillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
