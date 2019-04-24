import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'teacher',
        children: [
          {
            path: '',
            loadChildren: './teacher/teacher.module#TeacherPageModule'
          }
        ]
      },
      {
        path: 'video',
        children: [
          {
            path: '',
            loadChildren: './video/video.module#VideoPageModule'
          }
        ]
      },
      {
        path: 'service',
        children: [
          {
            path: '',
            loadChildren: './service/service.module#ServicePageModule'
          }
        ]
      },
      {
        path: 'bigevent',
        children: [
          {
            path: '',
            loadChildren: './bigevent/bigevent.module#BigeventPageModule'
          }
        ]
      },
      {
        path: 'association',
        children: [
          {
            path: '',
            loadChildren: './association/association.module#AssociationPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: './settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/teacher',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/teacher',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
