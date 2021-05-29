import axios from "axios";

const url = "http://localhost:3000";

export const UseGoodReads = async (book) => {
  try {
    const response = await axios.get(
      `${url}/book/review_counts.json?key=KGXBPKnyuYSnSpYDYo7rA&isbns=${book.isbn}`
    );

    return response.data.books[0];
  } catch (e) {
    console.error("Error cause:" + e.message);
    return e.message;
  }
};
