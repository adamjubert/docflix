Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :series, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :genres, only: [:index, :show]
    resources :episodes, only: [:index, :show]
    resources :reviews, only: [:show, :create, :update, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]
  end

  root 'static_pages#root'
end
