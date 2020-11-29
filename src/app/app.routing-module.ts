import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cocktail-list',
        component: CocktailListComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
