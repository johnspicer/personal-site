import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		// This will throw a console error about no valid reducers,
		// but I'm ok with it as I might want reducers in future.
	}
});