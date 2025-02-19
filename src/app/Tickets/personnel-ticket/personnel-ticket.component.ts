import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-personnel-ticket',
  imports: [CommonModule],
  templateUrl: './personnel-ticket.component.html',
  styleUrl: './personnel-ticket.component.css',
})
export class PersonnelTicketComponent implements OnInit {
  journaux: any = [];

  async getjournaux() {
    const response = await axios('http://localhost:3000/staff/getall');
    if (response.status === 200) {
      this.journaux = response.data;
    } else {
      this.journaux = [];
    }
  }
  async ngOnInit(): Promise<void> {
    await this.getjournaux();
  }
}
