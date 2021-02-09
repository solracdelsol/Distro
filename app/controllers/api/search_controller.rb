class Api::SearchController < ApplicationController

  def index #to search for servers 
    # ActionController::Parameters.permit_all_parameters = false #not needed but good to know

    @servers = Server.where("server_title LIKE '%#{params[":server"][":server_title"]}%' ")

    if @servers
      render "api/search/index"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def ree 
  end

end