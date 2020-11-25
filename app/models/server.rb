class Server < ApplicationRecord

  validates :server_title, presence:true, uniqueness: { scope: :host_id, message: "can't have more than one server with the same title" }

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  has_many :subscriptions,
  foreign_key: :server_id,
  class_name: :Subscription

  has_many :users,
  through: :subscriptions

  has_many :channels,
  foreign_key: :server_id,
  class_name: :Channel


  

end
