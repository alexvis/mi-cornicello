class TruckController < ApplicationController

  def index
    location = '22 main st Boston MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: Rails.application.credentials.google_maps_key
    })
    current_address = JSON.parse(json)
    if current_address.class == Hash
      @lat = current_address["results"][0]["geometry"]["location"]["lat"]
      @lng = current_address["results"][0]["geometry"]["location"]["lng"]
    else
      @lat = 0
      @lng = 0
    end
  end

end
