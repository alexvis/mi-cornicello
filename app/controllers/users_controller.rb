class UsersController < ApplicationController
  before_action :authorize_user

  def index
    @users = User.all
    binding.pry
  end

  def show

  end

  def create

  end

  def new
  end

  private

  def authorize_user
    if !current_user.admin? || !current_user
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
