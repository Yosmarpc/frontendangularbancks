import { ModuleWithProviders } from '@angular/core';
import {  Routes, RouterModule  } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomerComponent } from './components/homer/homer.component';


const appRoutes : Routes=[
    { path: '', component: HomerComponent},
    {path: '**',  component: ErrorComponent},
];

export  const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);