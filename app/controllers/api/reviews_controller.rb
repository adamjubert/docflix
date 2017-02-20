class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      debugger
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end 
  end

  private
  def review_params
    params.require(:review).permit(:stars, :comment, :user_id, :series_id)
  end
end
