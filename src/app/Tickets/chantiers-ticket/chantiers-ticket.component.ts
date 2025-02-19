import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-chantiers-ticket',
  imports: [CommonModule],
  templateUrl: './chantiers-ticket.component.html',
  styleUrl: './chantiers-ticket.component.css',
})
export class ChantiersTicketComponent implements OnInit {
  chantiers: any[] = [];

  async getChantiers() {
    const response = await axios('http://localhost:3000/projet/getall');
    if (response.status === 200) {
      this.chantiers = response.data;
    } else {
      this.chantiers = [];
    }
  }
  async ngOnInit(): Promise<void> {
    await this.getChantiers();
  }
}
