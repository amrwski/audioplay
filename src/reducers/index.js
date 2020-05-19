import { combineReducers } from "redux"

const songReducer = () => {
  return [
    { title: "Dwell", duration: "6:25" },
    { title: "Nobilia", duration: "3:41" },
    { title: "Black Letter", duration: "5:44" },
    { title: "Interlude 1", duration: "2:49" },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
})
