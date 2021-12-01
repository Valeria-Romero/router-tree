import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AuthorComponent } from './author/author.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'brand/:id',
        component: BrandComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      }
    ]
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    children: [
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'author/:id',
        component: AuthorComponent
      },
      {
        path: 'all/:id',
        component: AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
