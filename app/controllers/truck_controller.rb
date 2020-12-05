class TruckController < ApplicationController

  def index
    location = '22 main st Boston MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: 'AIzaSyAVvMcEDDYQz2QU347ASQ1cSLlN81iLDn4'
    })
    current_addres = JSON.parse(json)
  end
end
