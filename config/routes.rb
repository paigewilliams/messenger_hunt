Rails.application.routes.draw do
  resources :places

  resources :users, only: [:index] do
    resources :messages, only: [:index, :create, :new, :show, :destroy]
  end

  root 'sessions#new'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/signout' => 'sessions#destroy'
end
