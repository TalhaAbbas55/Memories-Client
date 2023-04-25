import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const url = "http://localhost:5000/posts";
API.interceptors.request.use((req) => {
  let token = JSON.parse(localStorage.getItem("profile"))?.token;

  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req; // we need to return the request otherwise it will be blocked
});
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags || "none"
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id, updatedPost) =>
  API.patch(`/posts/${id}/likePost`, updatedPost);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
