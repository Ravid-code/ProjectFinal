import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { concat } from 'rxjs';
import { Contact } from './contact/contact';
import { PgaeProduct } from './pgae-product/pgae-product';
import { ProductDetail } from './product-detail/product-detail';


export const routes: Routes = [
    {
        path: "cart",
        component: Cart
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "",
        pathMatch: 'full',
        component: Home
    },
    {
        path: "pgae-product",
        component: PgaeProduct
    },
    {
        path: "productDetail",
        component: ProductDetail
    }

];
