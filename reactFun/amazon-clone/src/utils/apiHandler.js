import axios from "axios";

export default function MakeRequest(url) {
  const requests = {
    get: async (querryParams) => {
      try {
        let finalUrl = querryParams
          ? `${url}?${Object.keys(querryParams)
              .map((key) => `${key}=${querryParams[key]}`)
              .join("&")}`
          : url;
        let result = await axios.get(finalUrl);
        return result.data;
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
    post: async (body) => {
      try {
        let result = await axios.post(url, body);
        if (result.code >= 200 && result.code <= 299) {
          return result.data;
        }
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
    put: async (body) => {
      try {
        let result = await axios.put(url, body);
        if (result.code >= 200 && result.code <= 299) {
          return result.data;
        }
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
    delete: async (body) => {
      try {
        let result = await axios.delete(url);
        if (result.code >= 200 && result.code <= 299) {
          return result.data;
        }
      } catch (error) {
        console.log(error);
        return { message: "Something went wrong", code: 600 };
      }
    },
  };
  return requests;
}
