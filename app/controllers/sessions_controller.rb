class SessionsController < ApplicationController

  def new
    if current_user
      redirect_to user_messages_path(current_user)
    end
  end

  def create
    @user = User.authenticate(params[:name].capitalize, params[:password])

    if @user
      flash[:notice] = "Welcome #{@user.name}!"
      session[:user_id] = @user.id
      # home set to Epicodus lat/long
      session[:lat] = 45.520626
      session[:long] = -122.6795871
      redirect_to user_messages_path(current_user)
    else
      flash[:alert] = 'Unsuccessful login '
      redirect_to signin_path
    end
  end

  def destroy
    session[:user_id] = nil
    session[:lat] = nil
    session[:long] = nil
    flash[:notice] = "You've logged out "
    redirect_to '/'
  end

end
