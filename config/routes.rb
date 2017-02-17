Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :series, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :episodes, only: [:index, :show]
  end

  root 'static_pages#root'
end
