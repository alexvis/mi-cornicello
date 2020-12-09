class TruckController < ApplicationController

  def index
    location = '22 main st Boston MA'
    json = HTTP.get('https://maps.googleapis.com/maps/api/geocode/json',
      params:{
        address: location,
        key: Rails.application.credentials.google_maps_key
    })
  end

end
