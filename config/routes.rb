Rails.application.routes.draw do
  get 'game/start'
  root 'pages#home'
  
  passwordless_for :users
  resources :users

end
