import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@portfolio/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', loadChildren: () => import('@portfolio/blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
