import { API } from "@/app/utils/utils";

export const GetAllUser = async () => {
    try {
      const response = await API.get(`/admin/getAllUser?page=0&size=5`);
      return response;
    } catch (error) {
      return error;
    }
  };