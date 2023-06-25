import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + "8f2309537376c9d7af255b7c94a3d84029f0d5bd55d55b7d8936926c8f5736bf0b240810550dc48a4526b63f9932196fa6a346d144ef379c67f4dc88da4083dd7a58a005ccab03536e2fd7ab9536cbc27382e8b7a812857356796e7e09908197ffcf0df16a6f7e1930976f5dea7baa2b53e74532f229a2329287410619e863b3",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await axios.get(
        process.env.REACT_APP_DEV_URL + url,
        params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchDataFromApi;
