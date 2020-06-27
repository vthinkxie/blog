import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '@portfolio/app.component';
import { FooterComponent } from '@portfolio/footer/footer.component';
import { ContainerComponent } from '@portfolio/container/container.component';
import { HomeComponent } from '@portfolio/home/home.component';
import { AppRoutingModule } from '@portfolio/app-routing.module';
import { HeaderComponent } from '@portfolio/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FooterComponent, ContainerComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
