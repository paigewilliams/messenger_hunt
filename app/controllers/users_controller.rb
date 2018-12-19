class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.name = @user.name.capitalize

    if @user.save
      flash[:notice] = 'Successful signup!'
      redirect_to '/'
    else
      flash[:alert] = 'There was a problem signing up'
      redirect_to '/signup'
    end

  end

  def index
    redirect_to '/'
  end

  def checkin
    session[:lat] = params[:message_msg_lat].to_d
    session[:long] = params[:message_msg_long].to_d
    redirect_to '/'
  end

private
  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end
end
