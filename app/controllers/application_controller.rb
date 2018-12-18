class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    if session[:user_id]
      # 45.5206223,-122.6795871
      # session[:lat] ? session[:lat] : 45.520626

      # session[:lat] = 45.520626
      # session[:long] ? session[:long] : -122.6795871
      @current_user ||= User.find(session[:user_id])
    end
  end

end
