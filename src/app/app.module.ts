import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ObservablesComponent } from './pages/observables/observables.component';
import { AllComponent } from './pages/observables/all/all.component';
import { FromEventComponent } from './pages/observables/from-event/from-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntervalComponent } from './pages/observables/interval/interval.component';
import { OfFromComponent } from './pages/observables/of-from/of-from.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { ToArrayComponent } from './pages/observables/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HighlightModule,
    NgDynamicBreadcrumbModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
