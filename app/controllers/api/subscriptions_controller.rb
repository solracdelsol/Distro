class Api::SubscriptionsController < ApplicationController

  def create
    @server = Server.where("server_title LIKE '%#{params[:server][:server_title]}%' ")
    @subscription = Subscription.new(server_id: @server.id, user_id: current_user.id)

    if @subscription.save!
      render "api/subscriptions/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @subscription = Subscription.find_by(server_id: 7, user_id: 8)
    # @server = Server.where("server_title LIKE '%#{params[:server][:server_title]}%' ")

    if @subscription
      render "api/subscriptions/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index #to search for servers 
    # ActionController::Parameters.permit_all_parameters = false #not needed but good to know
    # debugger
    @servers = Server.where("server_title LIKE '%#{params[":server"][":server_title"]}%' ")
    # @servers = Server.where("server_title LIKE '%demo%' ")

    if @servers
      render "api/subscriptions/index"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end



  # private

  # def subscription_params
  #   params.require(:subscription || :server).permit(:server_id, :user_id, :server_title) 
  # end
end
