export class WeatherViewModel {
    public city_id: string = null;
    public main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    };
    public wind: {
        speed: number,
        deg: number,
    };
    public clouds: {
        all: number
    };
    public weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ];
    public dt: number;
    public code: string;
    public dt_iso: string;
}
