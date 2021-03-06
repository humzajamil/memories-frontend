import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (IdOfPost, updatedPost) =>
  axios.patch(`${url}/${IdOfPost}`, updatedPost);
export const deletePost = (IdOfPost) => axios.delete(`${url}/${IdOfPost}`);
export const likePost = (IdOfPost) =>
  axios.patch(`${url}/${IdOfPost}/likePost`);
