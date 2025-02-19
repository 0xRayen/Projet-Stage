import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-journaux-ticket',
  imports: [CommonModule],
  templateUrl: './journaux-ticket.component.html',
  styleUrl: './journaux-ticket.component.css',
})
export class JournauxTicketComponent implements OnInit {
  journaux: any = [];

  async getjournaux() {
    const response = await axios('http://localhost:3000/rapport/getall');
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
