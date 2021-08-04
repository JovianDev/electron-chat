import React, { useEffect } from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import AvailableChatsList from '../components/AvailableChatsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../actions/chats';

export default function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => {
    return chats.items;
  });

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose Your Channel" />
        <AvailableChatsList chats={chats} />
      </div>
    </div>
  );
}
