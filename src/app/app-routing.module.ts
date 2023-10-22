import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './pages/promise/promise.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { AllComponent } from './pages/observables/all/all.component';
import { FromEventComponent } from './pages/observables/from-event/from-event.component';
import { IntervalComponent } from './pages/observables/interval/interval.component';
import { OfFromComponent } from './pages/observables/of-from/of-from.component';
import { ToArrayComponent } from './pages/observables/to-array/to-array.component';
import { CustomComponent } from './pages/observables/custom/custom.component';
import { Angular16Component } from './pages/angular16/angular16.component';
import { MapComponent } from './pages/observables/map/map.component';
import { PluckComponent } from './pages/observables/pluck/pluck.component';
import { FilterComponent } from './pages/observables/filter/filter.component';
import { TapComponent } from './pages/observables/tap/tap.component';
import { TakeComponent } from './pages/observables/take/take.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent,
    data: {
      title: 'Promise',
      breadcrumb: [
        {
          label: 'Promise',
          url: '',
        },
      ],
    },
  },

  {
    path: 'angularv16',
    component: Angular16Component,
    data: {
      title: 'Angular v16 features',
      breadcrumb: [
        {
          label: 'Angular v16 features',
          url: '',
        },
      ],
    },
  },
  
  {
    path: 'observable',
    component: ObservablesComponent,
    children: [
      {
        path: 'list',
        component: AllComponent,
        data: {
          title: 'List',
          breadcrumb: [
            {
              label: 'Observable',
              url: '/observable/list',
            },
            {
              label: 'Lists',
              url: '',
            },
          ],
        },
      },
      { path: 'fromEvent', component: FromEventComponent ,
      data: {
        title: 'From Event',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'From Event',
            url: '',
          },
        ],
      },},
      { path: 'interval', component: IntervalComponent ,
      data: {
        title: 'Interval',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Interval',
            url: '',
          },
        ],
      }, },
      { path: 'of-from', component: OfFromComponent , data: {
        title: 'Of/From',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Of/From',
            url: '',
          },
        ],
      }},
      { path: 'to-array', component: ToArrayComponent , data: {
        title: 'To Array',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable.list',
          },
          {
            label: 'To Array',
            url: '',
          },
        ],
      }},
      { path: 'custom', component: CustomComponent , data: {
        title: 'Custom Observable',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Custom Observable',
            url: '',
          },
        ],
      }},
      { path: 'map', component: MapComponent , data: {
        title: 'Map',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Map',
            url: '',
          },
        ],
      }},
      { path: 'pluck', component: PluckComponent , data: {
        title: 'Pluck',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Pluck',
            url: '',
          },
        ],
      }},
      { path: 'filter', component: FilterComponent , data: {
        title: 'Filter',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Filter',
            url: '',
          },
        ],
      }},
      { path: 'tap', component: TapComponent , data: {
        title: 'Tap',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Tap',
            url: '',
          },
        ],
      }},
      { path: 'take', component: TakeComponent , data: {
        title: 'Take',
        breadcrumb: [
          {
            label: 'Observable',
            url: '/observable/list',
          },
          {
            label: 'Take',
            url: '',
          },
        ],
      }},
        {
          path: '**',
          redirectTo: 'observable/list'
        },
    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
