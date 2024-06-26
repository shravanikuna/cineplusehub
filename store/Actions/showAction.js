import axios from "axios";
import { adderrors, addshows, changepage } from "../Reducers/showReducer";

export const asyncaddshows = () => async (dispatch, getState) => {
   try {
      const { page } = getState().showReducer;
      const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=e9e5a998666af3b52285ccbb3a594f35&page=${page}`);
      dispatch(addshows(data.results));
   } catch (error) {
      dispatch(adderrors(error.response.data.status_message));
   }
}