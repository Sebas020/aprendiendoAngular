//importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';//Nos permite generar un modulo con las rutas
import { Routes, RouterModule } from '@angular/router';

//Importar los componentes los cuales les quiero hacer una página exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

//Array de rutas => configuracion de todas las rutas que voy a configurar
const appRoutes: Routes = [
    {path:'', component: HomeComponent },
    {path:'home', component: HomeComponent },
    {path:'blog', component: BlogComponent },
    {path: 'blog/articulo/:id', component: ArticleComponent },
    {path: 'blog/crear', component: ArticleNewComponent },
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent },
    {path: 'formulario', component: FormularioComponent },
    {path: 'peliculas', component: PeliculasComponent },
    {path: 'pagina-de-pruebas', component: PaginaComponent },
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent },
    {path: '**', component: ErrorComponent }
];
// Exportar el moduo de rutas
export const appRoutingPrividers: any[] = [];//Establecer como servicio al router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);/*Esto lo que hace es cargar toda
la configuración de rutas al pasarle el appRoutes, al final establece todas las rutas y hace que 
existan y funcionen dentro del sistema de routing de angular*/