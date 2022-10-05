Rails.application.routes.draw do
  root 'pages#home'
  
  passwordless_for :users
  resources :users

end
