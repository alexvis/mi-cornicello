class TruckController < ApplicationController

  def index
    location = '22 main st Boston MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: "AIzaSyAVvMcEDDYQz2QU347ASQ1cSLlN81iLDn4"
    })
    current_address = JSON.parse(json)
    puts current_address.inspect
    if current_address != nil
      @lat = current_address["results"][0]["geometry"]["location"]["lat"]
      @lng = current_address["results"][0]["geometry"]["location"]["lng"]
    else
      @lat = 0
      @lng = 0
    end
  end

end
