import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  linksMenu = {
    navCssClass: 'navbar-nav',
    entries: [
      {
        name: this._translateService.instant('User services'),
        iconCssClass: 'fa fa-users',
        entries: [{
          name: this._translateService.instant('Circulation'),
          routerLink: '/circulation',
          iconCssClass: 'fa fa-exchange'
        }, {
          name: this._translateService.instant('Requests'),
          routerLink: '/circulation/requests',
          iconCssClass: 'fa fa-truck'
        }, {
          name: this._translateService.instant('Patrons'),
          routerLink: '/records/patrons',
          iconCssClass: 'fa fa-users'
        }]
      }, {
        name: this._translateService.instant('Catalog'),
        iconCssClass: 'fa fa-file-o',
        entries: [{
          name: this._translateService.instant('Documents'),
          routerLink: '/records/documents',
          iconCssClass: 'fa fa-file-o'
        }, {
          name: this._translateService.instant('Create a bibliographic record'),
          routerLink: '/records/documents/new',
          iconCssClass: 'fa fa-file-o'
        }, {
          name: this._translateService.instant('Persons'),
          routerLink: '/records/persons',
          iconCssClass: 'fa fa-user'
        }]
      }, {
        name: this._translateService.instant('Acquisitions'),
        iconCssClass: 'fa fa-university',
        entries: [{
          name: this._translateService.instant('Vendors'),
          routerLink: '/records/vendors',
          iconCssClass: 'fa fa-briefcase'
        }, {
          name: this._translateService.instant('Orders'),
          routerLink: '/records/acq_orders',
          iconCssClass: 'fa fa-shopping-cart'
        }, {
          name: this._translateService.instant('Budgets'),
          routerLink: '/records/budgets',
          iconCssClass: 'fa fa-money'
        }]
      }, {
        name: this._translateService.instant('Admin & Monitoring'),
        iconCssClass: 'fa fa-cogs',
        entries: [{
          name: this._translateService.instant('Circulation policies'),
          routerLink: '/records/circ_policies',
          iconCssClass: 'fa fa-exchange'
        }, {
          name: this._translateService.instant('Item types'),
          routerLink: '/records/item_types',
          iconCssClass: 'fa fa-file-o'
        }, {
          name: this._translateService.instant('Patron types'),
          routerLink: '/records/patron_types',
          iconCssClass: 'fa fa-users'
        }, {
          name: this._translateService.instant('My organisation'),
          routerLink: `/records/organisations/detail/${this._userService.getCurrentUser().library.organisation.pid}`,
          iconCssClass: 'fa fa-university'
        }, {
          name: this._translateService.instant('My library'),
          routerLink: this._myLibraryRouterLink(),
          iconCssClass: 'fa fa-university'
        }, {
          name: this._translateService.instant('Libraries'),
          routerLink: '/records/libraries',
          iconCssClass: 'fa fa-university'
        }]
      }
    ]
  };

  constructor(
    private _translateService: TranslateService,
    private _userService: UserService,
  ) {}

  private _myLibraryRouterLink() {
    return `/records/libraries/detail/${this._userService.getCurrentUser().currentLibrary}`;
  }
}