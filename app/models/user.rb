class User < ApplicationRecord
  validates :user_name, presence: true, uniqueness: { case_sensitive: false }

  passwordless_with :user_name
end
