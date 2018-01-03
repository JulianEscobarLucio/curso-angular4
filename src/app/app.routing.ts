import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { empleadoComponent } from './empleado/empleado.component';
import { FrutaComponent} from './fruta/fruta.component';
import { Homecomponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/conches.components';
import { PlatillasComponent } from './plantillas/plantillas.component'

const appRoutes:Routes =[
    {path: '', component: empleadoComponent},
    {path:'empleado', component:empleadoComponent},
    {path:'fruta', component:FrutaComponent},
    {path:'pagina-principal', component:Homecomponent},
    {path:'contacto', component:ContactoComponent},
    {path:'contacto/:page', component:ContactoComponent},
    {path:'coches', component:CochesComponent},
    {path:'plantillas', component:PlatillasComponent},
    {path: '**', component: empleadoComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);