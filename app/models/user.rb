class User < ApplicationRecord
  attr_accessor :password
  validates_confirmation_of :password
  validates :name, :presence => true, :uniqueness => true
  before_save :encrypt_password
  has_many :messeges, foreign_key: 'from_user', dependent: :delete_all

  def self.authenticate(name, password)
    user = User.find_by "name = ?", name
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  def encrypt_password
    self.password_salt = BCrypt::Engine.generate_salt
    self.password_hash = BCrypt::Engine.hash_secret(password,password_salt)
  end

  def my_msgs
    Messege.where("to_user = ?", self.id)
  end

end
