import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  searchValue: string;
}

const initialState: ProductState = {
  searchValue: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchInput: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload; //search input which user searches will be updated here in redux
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchInput } = productSlice.actions;

export default productSlice.reducer;
