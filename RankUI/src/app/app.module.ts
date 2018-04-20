import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AzureMlProxyInterceptor} from './services/mvc-api/azureml-proxy.interceptor';
import {ProxyService} from './services/mvc-api/services/AzureMLProxy.Controllers.Proxy.Service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, CommonModule
  ],
  providers: [
    ProxyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AzureMlProxyInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
