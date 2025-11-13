import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e02f9fdb4da4096af28a6e97e413bb9",
  },
});
