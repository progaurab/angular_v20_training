import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthViewComponent } from '../month-view/month-view';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule, MonthViewComponent],
    templateUrl: './calendar.html',
    styleUrls: ['./calendar.css'],
})
export class CalendarComponent {
    currentDate = new Date();

    changeMonth(offset: number) {
        this.currentDate = new Date(
            this.currentDate.setMonth(this.currentDate.getMonth() + offset)
        );
    }
}