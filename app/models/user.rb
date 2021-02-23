class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable


  validates :email, presence: true
  validates :role, presence: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, on: :create

  devise :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :validatable


  def admin?
    role == "admin"
  end

end
