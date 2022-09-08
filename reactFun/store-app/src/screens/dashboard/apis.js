import MakeRequest from "../../utils/apiHandler";

const dashboardAPICalls = {
  getAllStores: async () => {
    try {
      let res = await MakeRequest("http://127.0.0.1:5000/store").get();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  modifyStore: async () => {},
  deleteStore: async () => {},
  createStore: async () => {},
};

export default dashboardAPICalls;
