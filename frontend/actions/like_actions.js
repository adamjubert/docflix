import * as LikeApiUtil from '../util/like_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = 'RECEIVE_LIKES';

export const fetchLikes = () => dispatch => (
  LikeApiUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)))
)

export const createLike = like => dispatch => (
  LikeApiUtil.createLike(like).then(like => dispatch(receiveLike(like)))
);


export const deleteLike = like => dispatch => (
  LikeApiUtil.deleteLike(like).then(like => dispatch(removeLike(like)))
);

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
})

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});
