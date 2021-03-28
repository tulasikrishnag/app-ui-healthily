import axios from "axios";
import * as constants from '../constants'
export const conditionsApi = {
  getConditions: async () => {
    try {
    
      const response = await axios.get(
        `${constants.BACK_END_URL}:${constants.BACK_END_PORT}/conditions`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
