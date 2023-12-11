import { createSlice } from "@reduxjs/toolkit";
import Global from "../../config/Global";
import axios from "axios";

export const userSlice = createSlice({
  name: "UserLogin",
  initialState: {
    allPokemons: [],
    pokemonsDetails: [],
    loginSucces: {},
    loading: true,
    active: false,
    isAuthenticated: false,
    createUser: false,

    messageError: null,
    messageErrCreate: null,
    offset: 0,
  },
  reducers: {
    setAllPokemons: (state, action) => {
      state.allPokemons = action.payload;
    },
    setPokemonsDetails: (state, action) => {
      state.pokemonsDetails = action.payload;
    },
    setLoginSuccess: (state, action) => {
      state.loginSucces = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
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
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});

export const {
  setPokemonsDetails,
  setAllPokemons,
  setLoginSuccess,
  setLoading,
  setIsAuthenticated,
  setCreateUser,
  setMessageError,
  setMessageErrCreate,
  setOffset,
} = userSlice.actions;

export default userSlice.reducer;

export const loginUserThunk = (singIn) => async (dispatch) => {
  try {
    await axios.post(Global.baseUrl + "/login", singIn).then((res) => {
      localStorage.setItem("token", res?.data?.token);
      dispatch(
        setLoginSuccess({
          username: res?.data?.username,
          email: res?.data?.email,
        })
      );
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
//* peticiones a la api de pokemon (pokeapi)

export const getGlobalPokemons = () => async (dispatch) => {
  try {
    await axios
      .get(Global.baseUrlPokeApi + `pokemon?limit=100000&offset=0`)
      .then((res) => {
        const promises = res.data.results.map(async (pokemon) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return pokemonDetails.data;
        });
        Promise.all(promises).then((pokemonDetails) => {
          dispatch(setAllPokemons(pokemonDetails));
          dispatch(setLoading(false));

        });
      });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const getLimitPokemons =
  (limit, offset, pokeData) => async (dispatch) => {
    try {
      await axios
        .get(Global.baseUrlPokeApi + `pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => {
          const promises = res.data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return pokemonDetails.data;
          });
          Promise.all(promises).then((pokemonDetails) => {
            dispatch(setPokemonsDetails([...pokeData,...pokemonDetails]));
            dispatch(setLoading(false));
          });
        });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

export const getPokemonById = (id) => async () => {
  try {
    await axios.get(Global.baseUrlPokeApi + `pokemon/${id}`).then((res) => {
      console.log(res?.data);
    });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

