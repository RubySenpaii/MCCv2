import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    dropdown: string;
    children: Array<RouteInfo>;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: '', class: '', dropdown: '', children: [] },
    { path: '/banking', title: 'Banking',  icon:'', class: '', dropdown: '', children: [
      { path: '/banking-accounts', title: 'Accounts at a Glane', icon: '', class: '', dropdown: '', children: [] },
      { path: '/banking-funds', title: 'Fund Transfers', icon: '', class: '', dropdown: '', children: [] }
    ]},
    { path: '/table-list', title: 'Payables',  icon:'', class: '', dropdown: '', children: [
      { path: '/test', title: 'Vendors', icon: '', class: '', dropdown: '', children: [] },
      { path: '/test', title: 'Expenses', icon: '', class: '', dropdown: '', children: [] },
      { path: '/test', title: 'Salaries', icon: '', class: '', dropdown: '', children: [] },
      { path: '/test', title: 'Bank Payouts', icon: '', class: '', dropdown: '', children: [] }
    ]},
    { path: '/typography', title: 'Receivables',  icon:'', class: '', dropdown: '', children: [
      { path: '/test', title: 'Customers', icon: '', class: '', dropdown: '', children: [] },
      { path: '/test', title: 'Collections', icon: '', class: '', dropdown: '', children: [] }
    ] },
    { path: '/icons', title: 'Onboarding',  icon:'', class: '', dropdown: '', children: [] },
    { path: '/notifications', title: 'Reports',  icon:'', class: '', dropdown: '', children: [] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


  isMobileMenu() {
      return true;
  };
}
