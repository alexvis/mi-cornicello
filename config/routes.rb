Rails.application.routes.draw do
  root "homepage#index"
  resources :homepage, only: :index

  resources :orderonline, only: :index
  resources :truck, only: :index
  resources :menu, only: :index
  resources :events, only: :index
  resources :thetruck, only: :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
