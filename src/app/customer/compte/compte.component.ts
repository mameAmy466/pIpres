import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
public valide: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  isvalide() {
    this.valide = true;
  }

}
