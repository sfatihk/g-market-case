import { TagsType } from "../../types/TagsType";
import tagReducer, { loadTags } from "./tagSlice";

describe("tag reducer", () => {
  const initialState: TagsType = [
    {
      name: "Tag1",
      count: 100,
    },
    {
      name: "Tag2",
      count: 100,
    },
  ];
  it("should handle initial state", () => {
    expect(tagReducer(undefined, {})).toEqual({ tags: [] });
  });

  it("should load tags", () => {
    const actual = tagReducer({ tags: [] }, loadTags(initialState));

    expect(actual.tags[0]).toEqual(initialState[0]);
  });
});
