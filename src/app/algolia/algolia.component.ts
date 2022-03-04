import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

@Component({
  selector: 'app-algolia',
  templateUrl: './algolia.component.html',
  styleUrls: ['./algolia.component.scss']
})
export class AlgoliaComponent {
  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };
}
