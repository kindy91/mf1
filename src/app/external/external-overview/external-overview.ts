import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-external-overview',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './external-overview.html',
  styleUrl: './external-overview.scss',
})
export class ExternalOverview {}
