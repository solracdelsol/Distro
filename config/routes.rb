Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  root "static_pages#root"


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update, :show, :destroy]  do
    end
      #resources :messages, only: [:index, :show] # if I ever wanted to index a specific user's messages indiscriminantly i can use this.
    resources :servers, only: [:create, :destroy, :index, :show, :update] do
      resources :channels, only: [:create, :destroy, :index, :show, :update]
      resources :subscriptions, only: [:show, :index, :destroy]
    end
    
    resources :channels do
      resources :messages, only: [:create, :index, :show]
    end
    #nested so users have routes to their servers
    resource :session, only: [:create, :destroy]

    resources :subscriptions, only: [:create, :index, :show, :destroy]

    resources :search, only: [:index]

    get "/search/users", to: "/api/search#user_index"

  end


  
  #SHOULD I NOT NEST THE ROUTES LIKE THIS? to not overcomplicate routes
  # namespace :api, defaults: {format: :json} do
  #   resources :users, only: [:create, :index, :update, :show, :destroy]  #only pertains only to users, not to [create]
  #   resources :servers, only: [:create, :destroy, :index, :show, :update] 
  #   resources :channels, only: [:create, :destroy, :index, :show, :update]
      
  #   #nested so users have routes to their servers
  #   resource :session, only: [:create, :destroy]

  # end
  
  

  mount ActionCable.server => '/cable'


end
