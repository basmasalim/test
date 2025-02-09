import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent), title: 'Login' },
      { path: 'register', loadComponent: () => import('./pages/register/register.component').then((c) => c.RegisterComponent), title: 'Register' }
    ]
  },
  {
    path: '', component: BlankLayoutComponent, children: [
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent), title: 'Home' },
      { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then((c) => c.CartComponent), title: 'Cart' },
      { path: 'products', loadComponent: () => import('./pages/products/products.component').then((c) => c.ProductsComponent), title: 'Products' },
      { path: 'categories', loadComponent: () => import('./pages/categories/categories.component').then((c) => c.CategoriesComponent), title: 'Categories' },
      { path: 'brands', loadComponent: () => import('./pages/brands/brands.component').then((c) => c.BrandsComponent), title: 'Brands' },
    ]
  },
  { path: '**', component: NotfoundComponent, title: 'Notfound' },
];
