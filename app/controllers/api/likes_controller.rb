class Api::LikesController < ApplicationController

  def index
    @likes = Like.all.where(user_id: current_user.id)
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render '/api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])

    if @like.destroy
      render '/api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :serie_id)
  end

end
