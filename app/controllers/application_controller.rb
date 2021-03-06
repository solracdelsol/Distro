class ApplicationController < ActionController::Base
  
  #CELLL for session token stuff

  helper_method :current_user, :logged_in?

  private

  def current_user
    # return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    # cookies.signed[:user_id] = user.id ## ADDED THESE FOR ACTIONCABLE REVIEW THIS
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    # cookies.delete(:user_id) ##
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
