class SessionsController < ApplicationController
  def create
    @user = User.authenticate(params[:email], params[:password])
    if @user
      flash[:notice] = 'Sucesful log in!'
      session[:user_id] = @user.id
      redirect_to posts_path
    else
      flash[:alert] = 'Unsuccessful log in attempt :-('
      redirect_to signin_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "You've logged out"
    redirect_to '/'
  end

end
