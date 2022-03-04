import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgoliaComponent } from './algolia.component';
import { ConfigModule } from '@spartacus/core';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [
    AlgoliaComponent
  ],
  imports: [
    CommonModule,
    NgAisModule,
    ConfigModule.withConfig({
      cmsComponents: {
        BreadcrumbComponent: {
          component: AlgoliaComponent
        }
      }
    })
  ]
})
export class AlgoliaModule { }
