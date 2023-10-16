import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './pages/promise/promise.component';

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
  // {
  //   path: 'observable',
  //   component: ObservableComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: AllComponent,
  //       data: {
  //         title: 'List',
  //         breadcrumb: [
  //           {
  //             label: 'Observable',
  //             url: '/observable',
  //           },
  //           {
  //             label: 'Lists',
  //             url: '',
  //           },
  //         ],
  //       },
  //     },
  //     { path: 'fromEvent', component: FromEventComponent ,
  //     data: {
  //       title: 'From Event',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'From Event',
  //           url: '',
  //         },
  //       ],
  //     },},
  //     { path: 'interval', component: IntervalComponent ,
  //     data: {
  //       title: 'Interval',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Interval',
  //           url: '',
  //         },
  //       ],
  //     }, },
  //     { path: 'of-from', component: OfFromComponent , data: {
  //       title: 'Of/From',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Of/From',
  //           url: '',
  //         },
  //       ],
  //     }},
  //     { path: 'to-array', component: ToArrayComponent , data: {
  //       title: 'To Array',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'To Array',
  //           url: '',
  //         },
  //       ],
  //     }},
  //     { path: 'custom', component: CustomComponent , data: {
  //       title: 'Custom Observable',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Custom Observable',
  //           url: '',
  //         },
  //       ],
  //     }},
  //     { path: 'map', component: MapComponent , data: {
  //       title: 'Map',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Map',
  //           url: '',
  //         },
  //       ],
  //     }},
  //     { path: 'pluck', component: PluckComponent , data: {
  //       title: 'Pluck',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Pluck',
  //           url: '',
  //         },
  //       ],
  //     }},
  //     { path: 'filter', component: FilterComponent , data: {
  //       title: 'Filter',
  //       breadcrumb: [
  //         {
  //           label: 'Observable',
  //           url: '/observable',
  //         },
  //         {
  //           label: 'Filter',
  //           url: '',
  //         },
  //       ],
  //     }},
  //   ],
  // },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
