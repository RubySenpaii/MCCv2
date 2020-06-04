import { Component, OnInit } from '@angular/core';
import faqData from '../../assets/json/faq.json';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqList = faqData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.faqList);
  }

}
