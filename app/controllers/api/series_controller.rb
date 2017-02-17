class Api::SeriesController < ApplicationController
  # def index
  #   @series = Serie.all
  #   render :index
  # end

  def show
    @serie = Serie.find(params[:id])
  end


end
