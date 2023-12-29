import { API } from "@/app/utils/util";

export const GetAllUser = async () => {
    try {
      const response = await API.get(`/admin/getAllUser?page=0&size=100`);
      return response;
    } catch (error) {
      return error;
    }
  };