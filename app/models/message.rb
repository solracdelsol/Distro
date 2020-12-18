class Message < ApplicationRecord
  validates :body, :user_id, :channel_id, presence:true
  validates :body, length: {minimum: 1, maximum:1000}

  belongs_to :author,
  foreign_key: :user_id,
  class_name: :User


  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel
end
