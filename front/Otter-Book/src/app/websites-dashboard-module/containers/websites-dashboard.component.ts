import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'websites-dashboard',
  templateUrl: './websites-dashboard.component.html',
  styleUrls: ['./websites-dashboard.component.scss'],
})
export class WebsitesDashboard {
  /// Mock for websites Cards
  cards = [
    {
      projectName: 'Website name',
      position: 'Front-end',
      stack: {
        name: 'Jquery',
        image: 'dsad',
      },
      overview: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      detailPage: '/:id',
      linkToWebsite: 'url/???',
    },
    {
      projectName: 'Website name',
      position: 'Front-end',
      stack: {
        name: 'Jquery',
        image: 'dsad',
      },
      overview: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      detailPage: '/:id',
      linkToWebsite: 'url/???',
    },
    {
      projectName: 'Website name',
      position: 'Front-end',
      stack: {
        name: 'Jquery',
        image: 'dsad',
      },
      overview: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
      detailPage: '/:id',
      linkToWebsite: 'url/???',
    },
  ];
}
