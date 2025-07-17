// kreira globalni Redux store, tj. centralno mesto gde se čuvaju svi podaci (state).
import { configureStore } from "@reduxjs/toolkit";  
import postsReducer from '../features/posts/postsSlice';

// globalni store
export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

