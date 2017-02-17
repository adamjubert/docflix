class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all.includes(:series)
    render :index
  end

  def show
    @genre = Genre.find(params[:id])
  end
end
