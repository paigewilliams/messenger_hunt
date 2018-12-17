class Messege < ActiveRecord::Base
  validates :to_user, presence: true
  belongs_to :user, foreign_key: 'from_user'

end
