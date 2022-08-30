import axios from "axios";

export default function MakeRequest(url) {
  return {
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
      }
    },
  };
}
