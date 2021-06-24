import * as api from '../../Api';


export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }


}


export const createPost = () => async (dispatch) => {
    try {
        const { data } = await api.createPost();
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }


}