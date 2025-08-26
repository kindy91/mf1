import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-external-details',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './external-details.html',
  styleUrl: './external-details.scss',
})
export class ExternalDetails {}
