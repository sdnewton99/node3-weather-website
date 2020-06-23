const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c51315d67b4305732c4d23ac9369929e&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('[Error] Network error', undefined)
        } else if (body.error) {
            callback('[Error] Unable to find location.', undefined)
        } else {
            callback(undefined, {
                location: body.location.name,
                temperature: body.current.temperature,
                precipitation: body.current.precip
            })
        }
    })

}

module.exports = forecast