import {createSlice} from '@reduxjs/toolkit';
interface Tag {
  east: string;
  west: string;
  eastwest: string;
  science: string;
}
export const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    east: '',
    west: '',
    eastwest: '',
    science: '',
  },
  reducers: {
    addTag: (state: Tag, action) => {
      if (action.payload == 'east') state.east = '동양의 역사와 사상';
      else if (action.payload == 'west') state.west = '서양의 역사와 사상';
      else if (action.payload == 'eastwest') state.eastwest = '동서양의 문학';
      else if (action.payload == 'science') state.science = '과학사';
    },
    removeTag: (state: Tag, action) => {
      if (action.payload == 'east') state.east = '';
      else if (action.payload == 'west') state.west = '';
      else if (action.payload == 'eastwest') state.eastwest = '';
      else if (action.payload == 'science') state.science = '';
    },
  },
});

export const {addTag, removeTag} = tagSlice.actions;
export default tagSlice.reducer;
export const selectTag = (state: Tag) => state.tag;
