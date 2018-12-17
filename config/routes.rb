Rails.application.routes.draw do
  resources :users, only: [:index] do
    resources :messeges, only: [:index, :create, :new, :show, :destroy]
  end

  root 'sessions#new'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/signout' => 'sessions#destroy'
end
