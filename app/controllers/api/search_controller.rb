class Api::SearchController < ApplicationController

  def create

    search_string = params[:search][:query].downcase
    render json: {} if search_string.empty?

    @series = Serie.search_by_name(search_string)

    render :create
  end


end
