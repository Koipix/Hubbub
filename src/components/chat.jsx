import React, { useContext } from "react";
import Messages from "./messages";
import Input from "./input";
import { ChatContext } from "../context/ChatContext";


const Chat = () => {
    const {data} = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat