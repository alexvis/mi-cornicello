class TruckController < ApplicationController

  def index
    location = '22 main st Boston MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: Rails.application.credentials.google_maps_key
    })
    current_addres = JSON.parse(json)
    @format_address = current_addres["results"][0]["formatted_address"]
    @lat = current_addres["results"][0]["geometry"]["location"]["lat"]
    @lng = current_addres["results"][0]["geometry"]["location"]["lng"]

  end

end
