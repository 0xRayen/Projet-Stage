import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-personnel-list',
  imports: [MatPaginator, CommonModule, RouterOutlet],
  templateUrl: './personnel-list.component.html',
  styleUrl: './personnel-list.component.css',
})
export class PersonnelListComponent implements OnInit {
  personnelList: any[] = [];

  async fetchPersonnel() {
    const response = await axios.post('http://localhost:3000/staff/getall');
    if (response.status == 200) {
      this.personnelList = response.data;
    } else {
      this.personnelList = [];
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {}
}
