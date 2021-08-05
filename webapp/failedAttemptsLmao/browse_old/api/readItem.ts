import axios from "axios";

const readItem = async (itemID: string) => {
  // let item = undefined;

  let result = await axios({
    url: `http://localhost:5000/items/${itemID}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  });

  // console.log("resp", result);

  return result;
};
export default readItem;
