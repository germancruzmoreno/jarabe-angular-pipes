import { NgModule } from '@angular/core';
import { JarabeAngularPipesComponent } from './jarabe-angular-pipes.component';
import { JarabeImagePipe } from './pipes/jarabe-image.pipe';

@NgModule({
  declarations: [JarabeAngularPipesComponent, JarabeImagePipe],
  imports: [
  ],
  exports: [JarabeAngularPipesComponent, JarabeImagePipe]
})
export class JarabeAngularPipesModule { }
