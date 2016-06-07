export class Weather {
  weather : WeatherDetail[];
  main: WeatherMain;
  }
  
export class WeatherDetail {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class WeatherMain{ 
  temp: number;
  humidity : number;
  pressure: number;
  temp_min: number;
  temp_max: number;
  }