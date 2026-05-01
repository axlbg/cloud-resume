import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LambdaService } from '../../services/lambda.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{
  constructor(public data: PortfolioDataService, private lambdaService: LambdaService) {
  }  

  lastDeploy!:string;

  ngOnInit(): void {
    this.lambdaService.getLastDeploy()
      .subscribe({
        next: (data) => {
          this.lastDeploy = data.lastDeploy;
        },
        error: (err) => {
          console.error('Error fetching metadata', err);
        }
      });
    }

}
