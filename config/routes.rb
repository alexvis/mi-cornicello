Rails.application.routes.draw do
  root "homepage#index"
  devise_for :users
  resources :homepage, only: [:index]
  resources :users

  resources :orderonline, only: :index
  resources :truck, only: :index
  resources :menu, only: :index
  resources :events, only: :index
  resources :thetruck, only: :index
  resources :admins, only: :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
