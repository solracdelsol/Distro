# class Api::SubscriptionsController < ApplicationController

#   def create(search_query)
#     @server = Server.where("server_title LIKE '%#{search_query}%' ")
#     @subscription = Subscription.new(subscription_params)

#     if @subscription.save!

#     else

#     end
#   end


#   private

#   def subscription_params
#     params.require(:subscription).permit(:server_id, :user_id) 
#   end
# end
