Rails.application.routes.draw do
  get 'game/start'
  get 'game/spin'
  get 'game/cashout'
  root 'pages#home'
  
  passwordless_for :users
  resources :users

end
