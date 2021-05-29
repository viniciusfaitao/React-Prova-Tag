import axios from "axios";

const url = "http://localhost:3000";

export const UseTagBooks = async () => {
  try {
    const response = await axios.get(`${url}/tagBooks`);
    return response.data.results;
  } catch (e) {
    console.error("Error cause:" + e.message);
    return e.message;
  }
};
