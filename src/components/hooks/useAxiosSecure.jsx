import axios from "axios";

export const axiosSecure = axios.create({
  baseURL:'https://bistro-boss-server-two-green.vercel.app'
})
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;