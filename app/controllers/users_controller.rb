class UsersController < ApplicationController
  include Passwordless::ControllerHelpers

  def new
    @user = User.new
  end
  
  def create
    @user = User.new user_params

    if @user.save
      sign_in @user # <-- This!
      redirect_to root_path, flash: { notice: 'Welcome!' }
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name)
  end
end