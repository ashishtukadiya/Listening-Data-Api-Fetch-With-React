import axios from "axios";

// export const BASE_URL = process.env.PUBLIC_BASE_URL || "";
export const baseUrl = process.env.REACT_APP_BASE_URL || " ";




console.log("baseUrl",baseUrl)
export const POST = async (url, data) => {
  try {
    return await axios
      .post(url, data)
      .then((result) => {
        if (result) {
          throw result;
        } else {
          return result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};

export const GET = async (url) => {
  try {
    let config = {
      maxBodyLength: Infinity,
    };

    return await fetch(url, config)
      .then((result) => result.json())
      .then((result) => {
        if (result) {
          return result;
        } else {
          throw result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};
