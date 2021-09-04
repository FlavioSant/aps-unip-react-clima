interface Forecast {
  day: number;
  temperature: string;
  wind: string;
}

export interface Weather {
  city: string;
  temperature: string;
  wind: string;
  description: string;
  forecast: Forecast[];
}
