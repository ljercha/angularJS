export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
  }
  
export class WeatherDetail {
}

export class WeatherMain{ 
  temp: number;
  humidity : number;
  pressure: number;
  temp_min: number;
  temp_max: number;
  }