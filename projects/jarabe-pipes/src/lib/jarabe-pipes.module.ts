import { NgModule } from '@angular/core';
import { JarabePipesComponent } from './jarabe-pipes.component';
import { JarabeImagePipe } from './pipes/jarabe-image.pipe';

@NgModule({
  declarations: [JarabePipesComponent, JarabeImagePipe],
  imports: [
  ],
  exports: [JarabePipesComponent]
})
export class JarabePipesModule { }
