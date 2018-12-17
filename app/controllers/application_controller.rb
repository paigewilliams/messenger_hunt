class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    if session[:user_id]
      # session[:lat] = 45.520626
      # session[:long] = -122.6795871
      @current_user ||= User.find(session[:user_id])
    end
  end

end
