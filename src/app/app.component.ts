import { Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'Spotify Web App';

  constructor(private apiService: ApiService) {}

}
