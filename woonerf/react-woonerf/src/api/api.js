import axios from 'axios';
const API = axios.create();

export const BlogList = () => API.get("api/blog/");
export const BlogCreate = ((id, title, created_at, user, body, image) => API.post("api/blog/", {
    id: id,
    title: title,
    created_at: created_at,
    user: user,
    body: body,
    image: image,
}));