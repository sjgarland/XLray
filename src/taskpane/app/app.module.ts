import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import { MonitorComponent } from "./monitor/monitor.component";

@NgModule({
  declarations: [AppComponent, MonitorComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
