class HomeController < ApplicationController
  def index
    @all = Post.all
  end

  def write
    @pond = Post.new
    @pond.name = params[:input_name]
    @pond.content = params[:input_text]
    @pond.save
    redirect_to '/'
  end
end
