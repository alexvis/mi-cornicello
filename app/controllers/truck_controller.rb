class TruckController < ApplicationController

  def index
    @loco = ""
    location = '22 main st  c                                                                                                                                      MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: 'AIzaSyAVvMcEDDYQz2QU347ASQ1cSLlN81iLDn4'
    })
    current_addres = JSON.parse(json)
    @format_address = current_addres["results"][0]["formatted_address"]
    @lat = current_addres["results"][0]["geometry"]["location"]["lat"]
    @lng = current_addres["results"][0]["geometry"]["location"]["lng"]

  end

end
