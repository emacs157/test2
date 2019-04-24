import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'teacher', loadChildren: './tabs/teacher/teacher.module#TeacherPageModule' },
  // { path: 'video', loadChildren: './tabs/video/video.module#VideoPageModule' },
  // { path: 'service', loadChildren: './tabs/service/service.module#ServicePageModule' },
  // { path: 'association', loadChildren: './tabs/association/association.module#AssociationPageModule' },
  // { path: 'bigevent', loadChildren: './tabs/bigevent/bigevent.module#BigeventPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
