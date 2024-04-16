import { NgModule } from "@angular/core";
import { NgxMessageComponent } from "./ngx-message.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[NgxMessageComponent],
    exports:[NgxMessageComponent],
    imports:[CommonModule]
})

export class NgxMessageModule{}