import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JarabeAngularPipesComponent } from './jarabe-angular-pipes.component';
import { JarabeImagePipe } from './pipes/jarabe-image.pipe';
import { JarabeFilterPipe } from './pipes/jarabe-filter.pipe';

@NgModule({
  declarations: [JarabeAngularPipesComponent, JarabeImagePipe, JarabeFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [JarabeAngularPipesComponent, JarabeImagePipe, JarabeFilterPipe]
})
export class JarabeAngularPipesModule { }
