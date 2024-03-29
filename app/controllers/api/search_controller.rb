class Api::SearchController < ApplicationController

  def index #to search for servers 
    # ActionController::Parameters.permit_all_parameters = false #not needed but good to know

    @servers = Server.where("lower(server_title) LIKE '%#{params[":server"][":server_title"].downcase}%' ")

    if @servers
      render "api/search/index"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def user_index
    @users = User.where("lower(username) LIKE '%#{params[":user"][":username"].downcase}%' ")

    if @users
      render "api/search/user_index"
    end
  end

  # def search_params
  #   params.require(:server)
  # end

end