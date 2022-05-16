// import { createStore } from "redux-toolkit";
// import main_readucer from "../Main_Reducer/main_Reducer";
// const store = createStore(
//     main_readucer
// )
// export default store


import { createStore } from "redux";
import main_readucer from "../Main_Reducer/main_reducer";

const store = createStore(
    main_readucer
)

export default store


