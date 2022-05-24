import {Component, OnInit} from '@angular/core';
import {StatService} from "../../services/stat-service/stat.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  eventsPriceData: any;
  eventsStatusData: any;
  entityData: any;

  constructor(private statService: StatService) {
  }

  ngOnInit(): void {
    this.statService.getPriceStats().subscribe((res: any) => {
      this.eventsPriceData = [
        {name: "Free", value: res['Free']},
        {name: "Paid", value: res['Paid']},
      ];
    });
    this.statService.getStatusStats().subscribe((res: any) => {
      this.eventsStatusData = [
        {name: "Scheduled", value: res['Scheduled']},
        {name: "In process", value: res['In Process']},
        {name: "Ended", value: res['Ended']}
      ];
    });
    this.statService.getEntitiesData().subscribe((res: any) => {
      this.entityData = [
        {name: "Users", value: res['Users']},
        {name: "Events", value: res['Events']}
      ]
    });
  }
}
