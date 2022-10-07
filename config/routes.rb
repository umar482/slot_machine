Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      get 'game/intailize'
      get 'game/start'
      get 'game/spin'
      get 'game/cashout'
    end
  end
  
  get 'game/index'
  root 'pages#home'
  
  passwordless_for :users
  resources :users

end
