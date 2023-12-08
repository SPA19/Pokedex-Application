import { createSlice } from "@reduxjs/toolkit";
import Global from "../../config/Global";
import axios from "axios";

export const userSlice = createSlice({
  name: "UserLogin",
  initialState: {
    loginSucces: {},
    isAuthenticated: false,
    createUser: false,
    messageError: null,
    messageErrCreate: null,
  },
  reducers: {
    setLoginSuccess: (state, action) => {
      state.loginSucces = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setCreateUser: (state, action) => {
      state.createUser = action.payload;
    },
    setMessageError: (state, action) => {
      state.messageError = action.payload;
    },
    setMessageErrCreate: (state, action) => {
      state.messageErrCreate = action.payload;
    },
  },
});

export const {
  setLoginSuccess,
  setIsAuthenticated,
  setCreateUser,
  setMessageError,
  setMessageErrCreate,
} = userSlice.actions;

export default userSlice.reducer;

export const loginUserThunk = (singIn) => async (dispatch) => {
  try {
    await axios.post(Global.baseUrl + "/login", singIn).then((res) => {
      localStorage.setItem("token", res?.data?.token);
      dispatch(setLoginSuccess(res?.data));
      dispatch(setIsAuthenticated(true));
    });
  } catch (error) {
    dispatch(setMessageError(error?.response?.data?.message));
    console.log(error?.response?.data?.message);
  }
};

export const loginCreateThunk = (singIn) => async (dispatch) => {
  try {
    await axios.post(Global.baseUrl + "/register", singIn).then((res) => {
      localStorage.setItem("token", res?.data?.token);
      dispatch(setLoginSuccess(res?.data));
      dispatch(setIsAuthenticated(true));
    });
  } catch (error) {
    dispatch(setMessageErrCreate(error?.response?.data?.message));
    console.log(error?.response?.data?.message);
  }
};
