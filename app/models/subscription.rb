class Subscription < ApplicationRecord

  validates :user_id, :server_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :server,
  foreign_key: :server_id,
  class_name: :Server


  #I have subscribed user_id 8 (carlos) to server_id 7 (demo)
  #in controller we probably want to make an index method to find all servers with a subscription of current_user.id

end
