Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :users do
      resources :servers, only: [:create, :destroy, :index]
    end  #nested so users have routes to their servers

  end

 root "static_pages#root"

end
