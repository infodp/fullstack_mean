import { Component, OnInit } from '@angular/core';
import {
  faCirclePlus,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product.model';
import { CrudService } from 'src/app/services/crud.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  faCirclePlus = faCirclePlus;
  faPen = faPen;
  faTrash = faTrash;

  products: Product[] = [];
  constructor(
    private crudService: CrudService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {
    this.crudService.getProducts().subscribe((res: Product[]) => {
      //console.log(res);
      this.products = res;
    });
  }

  delete(id: any, index: any) {
    this.alertifyService.confirm({
      message: '¿Are you sure to delete the Product?',
      callback_delete: () => {
        this.crudService.deleteProduct(id).subscribe((res) => {
          this.products.splice(index, 1);
        });
      },
    });
  }
}
