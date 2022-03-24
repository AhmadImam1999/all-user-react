import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('api/?seed=abc&results=500');
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const UserAdapter = createEntityAdapter({
  selectId: (user) => user.name.first,
});
const UserData = UserAdapter.getInitialState({
  loading: false,
  error: null,
  filterUser: [],
});

const usersReducer = createSlice({
  name: 'users',
  initialState: UserData,
  reducers: {
    filterData(state, action) {
      UserAdapter.setAll(
        state,
        state.filterUser.filter(
          (item) =>
            item.name.first.includes(action.payload) ||
            item.name.last.includes(action.payload) ||
            item.email.includes(action.payload) ||
            item.dob.age === parseInt(action.payload)
        )
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      UserAdapter.setAll(state, action.payload);
      state.filterUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
} = UserAdapter.getSelectors((state) => state.users);

export default usersReducer.reducer;

export const { filterData } = usersReducer.actions;
