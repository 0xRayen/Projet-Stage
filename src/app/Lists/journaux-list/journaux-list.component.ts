import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-journaux-list',
  imports: [MatPaginator, CommonModule, RouterOutlet],
  templateUrl: './journaux-list.component.html',
  styleUrls: ['./journaux-list.component.css'],
})
export class JournauxListComponent implements OnInit {
  displayedColumns: string[] = [
    'checkbox',
    'title',
    'date',
    'author',
    'chantier',
  ];
  dataSource = new MatTableDataSource<any>([
    {
      checkbox: true,
      title: 'Journal Entry 1',
      date: '2024-02-18',
      author: 'Alice',
      chantier: 'Approved',
    },
    {
      checkbox: false,
      title: 'Journal Entry 2',
      date: '2024-02-17',
      author: 'Bob',
      chantier: 'Pending',
    },
    {
      checkbox: false,
      title: 'Journal Entry 3',
      date: '2024-02-16',
      author: 'Charlie',
      chantier: 'Rejected',
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
