class GameController < ApplicationController
  # before_action :require_user!, only: [:start]

  def start
  end

  def spin
    render json: { status: :success}
  end

  def cashout
    render json: { status: :success}
  end
end
