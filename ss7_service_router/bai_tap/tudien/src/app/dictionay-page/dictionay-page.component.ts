import { Component, OnInit } from '@angular/core';
import {IWORD} from '../iword';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {

  wordList: IWORD[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.wordList = this.dictionaryService.getAll();
  }

}
