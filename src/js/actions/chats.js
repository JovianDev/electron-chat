import * as api from '../api/chats';

// export function fetchChats() {
//   return async (dispatch) => {
//     const chats = await api.fetchChats();
//     debugger;
//     dispatch({
//       type: 'CHATS_FETCH_SUCCESS',
//       chats,
//     });
//     return chats;
//   };
// }

export const fetchChats = () => (dispatch) =>
  api.fetchChats().then((chats) =>
    dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats,
    })
  );
