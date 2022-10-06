class GameController < ApplicationController
  # before_action :require_user!, only: [:start]

  def index
  end
  
  def start
    render json: { status: :success, credit: 10}

  end

  def spin
    render json: { status: :success}
  end

  def cashout
    render json: { status: :success}
  end
end
