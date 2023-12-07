import { createSlice } from "@reduxjs/toolkit";
import Global from "../../config/Global";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loginSucces: {},
    isAuthenticated: false,
  },
  reducers: {
    setLoginSuccess: (state, action) => {
      state.loginSucces = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setloginSuccess, setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;

export const loginUserThunk = (singIn) => async (dispatch) => {
  try {
    await axios.post(Global.baseUrl + "/login", singIn).then((res) => {
      localStorage.setItem("user", res?.data?.email);
      dispatch(setIsAuthenticated(true));
    });
  } catch (error) {
    dispatch(setIsAuthenticated(false));
    console.log(error.response.data.message);
  }
};
