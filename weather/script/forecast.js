class Forecast {
    constructor(){
        this.key = 'GA9xMgfiohI08OK3AkLJLWuN516mhh77'
        this.CityUri = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        this.WeatherUri = 'http://dataservice.accuweather.com/currentconditions/v1/'
    }
async updateCity(city){
        const citydetail = await this.getCity(city);
        const weather = await this.getWeather(citydetail.Key);

        return { citydetail, weather}
}
async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`
    const response = await fetch(this.CityUri + query);

    const data = await response.json()

return data[0]
}
async getWeather(id){
    const query = `${id}?apikey=${this.key}`

    const response = await fetch(this.WeatherUri + query)
    const data = await  response.json()
    return data[0]

}

}



/*const key = 'GA9xMgfiohI08OK3AkLJLWuN516mhh77'


//get city information
const getCity = async (city) => {

const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
const query = `?apikey=${key}&q=${city}`

const response = await fetch(base + query);

const data = await response.json()

return data[0]

}


//get weather information
const getWeather = async (id) => {
 
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${id}?apikey=${key}`

    const response = await fetch (base + query);
    
    const data = await  response.json()

    return data[0]


}
*/
