class Channel < ApplicationRecord
  validates :server_id, presence: true
  validates :ch_title, presence:true, uniqueness: { scope: :server_id, message: "can't have more than one channel with the same title" }

  belongs_to :server

  has_many :messages

end
