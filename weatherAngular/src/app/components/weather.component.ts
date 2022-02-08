import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city!: string
  weather!: Weather
  fields = ''

  constructor(private activatedRoute: ActivatedRoute, private weatherSvc: WeatherService) { }

  ngOnInit(): void {
      this.city = this.activatedRoute.snapshot.params['city']
      this.fields = this.activatedRoute.snapshot.queryParams['fields']
      console.info('>>>city name is: ', this.city)
      console.info('>>>> fields = ',  this.fields)

      this.weatherSvc.getWeather(this.city)
        .then(w => this.weather = w)


  }

}
