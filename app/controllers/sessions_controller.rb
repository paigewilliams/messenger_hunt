class SessionsController < ApplicationController

  def new
    if current_user
      redirect_to user_messeges_path(current_user)
    end

  end

  def create
    @user = User.authenticate(params[:name], params[:password])
    if @user
      flash[:notice] = 'Sucesfully logged in '
      session[:user_id] = @user.id
      redirect_to user_messeges_path(current_user)
    else
      flash[:alert] = 'Unsuccessful attempt :-( '
      redirect_to signin_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You've logged out "
    redirect_to '/'
  end

end
