console.log('test')

const apiKey = "8db965459e689988c56f9bc2eafac014";

//prompt user input for city search
const city = "Austin";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
