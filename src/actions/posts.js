import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  console.log("getPost action **************");
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (IdOfPost, updatedPost) => async (dispatch) => {
  try {
    console.log(await api.updatePost(IdOfPost, updatedPost));
    const { data } = await api.updatePost(IdOfPost, updatedPost);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};