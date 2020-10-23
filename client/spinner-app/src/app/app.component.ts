import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderFooterService } from './services/header-footer.service';
import { baseHref } from './shared/baseHref';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  API_IMAGE_URL = `${baseHref}api/v1/imageUpload/`;
  favIcon: HTMLLinkElement = document.querySelector('#favIcon');
  baseHref: HTMLLinkElement = document.querySelector('#baseHref');
  HeaderFooter: any;

  title = 'spinner-app';
  // code for testing backend, remove "implements oninit", constructor and ngOnInit later
  testBackend:string;
  constructor(    
    private headerFooterService: HeaderFooterService,
    private metaService: Meta,
    private Pagetitle: Title) { }

  ngOnInit(): void {
    this.getHeaderFooter();
  }

  getHeaderFooter() {
    this.headerFooterService.getHeaderFooter()
      .subscribe( headerFooter => {
        this.HeaderFooter = headerFooter[0];
        this.baseHref.href = baseHref;
        this.favIcon.href = this.API_IMAGE_URL + this.HeaderFooter.favicon.slice(14);
        this.Pagetitle.setTitle( this.HeaderFooter.pageTitle );
        this.metaService.addTag({ name: 'description', content: this.HeaderFooter.pageDescription }); //Description
      });
  }

}
