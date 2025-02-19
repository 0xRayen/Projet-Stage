import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket/ticket.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [MatPaginator, MatSort, MatTable, CommonModule, MatColumnDef],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = []; // Columns displayed in the table
  dataSource!: MatTableDataSource<any>; // Data source for Material Table
  type: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    // Get headers and type from route
    this.route.data.subscribe((data) => {
      this.displayedColumns = [
        'checkbox',
        ...data['headers'].map((header: string) => header.toLowerCase()),
      ];
      this.type = data['type'] || '';
      this.loadTickets();
    });
  }

  loadTickets(): void {
    this.ticketService.getTickets(this.type).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
