Rails.application.routes.draw do
  resources :posts

  root 'posts#index'

  get '/signup' => 'users#new'
  get '/users' => 'users#create'

  get '/signin' => 'sessions#new'
  post 'signin' => 'sessions#create'
  get 'signout' => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
