import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/service/products/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { CategoriesService } from '../../core/service/categories/categories.service';
import { ICategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private readonly productsService = inject(ProductsService);
  private readonly categoriesService = inject(CategoriesService)

  products: IProduct[] = [];
  categories: ICategory[] = [];

  ngOnInit(): void {
    this.getProductData();
    this.getCategoriesData();
  }

  getProductData(): void {
    this.productsService.getAllProduct().subscribe({
      next: (res) => {
        this.products = res.data
      }
    });
  }

  getCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      }
    });
  }

  categoryOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    dots: true,
    dotsSpeed: 700,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  mainSlideOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: false,
    dots: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    dotsSpeed: 1000,
    navText: ['next', 'previous'],
    items: 1,
    nav: false
  }
}
