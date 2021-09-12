import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TagsType } from "../../types/TagsType";
import { TagType } from "../../types/TagType";

const initialState: TagsType = {
  tags: [],
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    loadTags: (state, action: PayloadAction<TagType[]>) => {
      state.tags = action.payload.sort((b1, b2) => b2.count - b1.count);
    },
  },
});

export const { loadTags } = tagSlice.actions;

export const getTags = (state: RootState) => state.tag;

export default tagSlice.reducer;
