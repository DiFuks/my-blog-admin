import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '@app/post/post.component';
import { PostModule } from '@app/post/post.module';

const routes: Routes = [{
  path: 'post',
  component: PostComponent,
}];

@NgModule({
  imports: [
    PostModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RootRoutingModule { }
