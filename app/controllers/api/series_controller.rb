class Api::SeriesController < ApplicationController
  def index
    @series = current_user.liked_series
    render 'api/series/index'
  end

  def show
    @serie = Serie.find(params[:id])
  end


end
