import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor() {}

  // Fetch tickets based on type
  getTickets(type: string): Observable<any[]> {
    const mockData: any = {
      utilisateurs: [
        {
          opérateur: 'Admin',
          nom: 'John Doe',
          date: 'Jan 13, 2025, 8:00 AM',
          cin: '12345678',
        },
        {
          opérateur: 'User',
          nom: 'Jane Smith',
          date: 'Jan 14, 2025, 9:30 AM',
          cin: '87654321',
        },
      ],
      journaux: [
        { journalName: 'System Log', date: 'Jan 10, 2025', status: 'Active' },
        { journalName: 'Error Log', date: 'Jan 12, 2025', status: 'Resolved' },
      ],
      personnel: [
        {
          name: 'Alice',
          role: 'Manager',
          department: 'HR',
          joiningDate: 'Feb 1, 2022',
        },
        {
          name: 'Bob',
          role: 'Engineer',
          department: 'Tech',
          joiningDate: 'Mar 15, 2023',
        },
      ],
    };
    console.log(`Fetching tickets for type: ${type}`, mockData[type]); // Debug log
    return of(mockData[type] || []);
  }
}
