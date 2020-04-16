import { Component, OnInit } from '@angular/core';

import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor( private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params.id);
  }

}
