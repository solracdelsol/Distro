class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true


  has_many :hosted_servers,
  foreign_key: :host_id,
  class_name: :Server

  has_many :subscriptions,
  foreign_key: :user_id,
  class_name: :Subscription

  has_many :servers,
  through: :subscriptions,
  class_name: :Server

  has_many :messages

  
  

  # has_many :server_subscriptions,
  # through: :subscriptions






  #THINK ABOUT HOW YOURE GOING TO CONNECT THIS ASSOCIATION
  # belongs_to :server,
  # foreign_key: :participants_id,
  # class_name: :Server

  #FIG VAPER CHECK W7D1 NOTES

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
