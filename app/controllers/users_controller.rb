class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = 'Successful signup!'
      session[:user_id] = @user.id
      redirect_to '/'
    else
      flash[:alert] = 'There was a problem signing up'
      redirect_to '/signup'
    end
  end

  def index
    redirect_to '/'
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

end
