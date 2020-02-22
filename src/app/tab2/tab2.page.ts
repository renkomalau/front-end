import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { BookAddPage } from '../book-add/book-add.page';
import { UtilsService } from '../services/utils.service';
@Component({
 selector: 'app-tab2',
 templateUrl: 'tab2.page.html',
 styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 books: any = [];
 constructor(
 private bookService: BookService,
 private router: Router,
 private modalCtrl: ModalController,
 private alertCtrl: AlertController,
 private utils: UtilsService) { }
 getData() {
 this.bookService.getAllBooks().subscribe(
 (response) => {
 console.log(response);
 this.books = response;
 },
 (err) => {
 this.books = [];