import React from 'react'
import {
  FilterOutlined, FormOutlined
} from "@ant-design/icons";
export default function Messages() {
  const chats = [
    { id: 1, name: 'Alice', message: 'Hey, how are you?' },
    { id: 2, name: 'Bob', message: 'Are you coming to the meeting?' },
    { id: 3, name: 'Charlie', message: 'Let’s catch up tomorrow!' },
  ];
  
  const [message, setMessage] = React.useState('');
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'Hello!' },
    { id: 2, text: 'How are you?' },
  ]);

  return (
    <div className='messageContainer'>
       <div className="chatContainer">
        <div>
        <div className='chatHead'>
          <div>
          Chats

          </div>
          <div className='chatIcons'>
        <FilterOutlined /> <FormOutlined />
        </div>
          </div> 
     
        </div>
      <div className='chatList'>
      <ul>
        {chats.map(chat => (
          <li key={chat.id} >
            <div className="chat-item" >
     
            <div className="profile-initials">
                {chat.name.split(' ').map((n) => n[0]).join('')}
              </div>
            <div >
              <div className="chat-name">{chat.name}</div>
              <div className="chat-last-message">{chat.message}</div>
            </div>
            <div className='lastMessageTime'>
            11:18 AM
            </div>
            </div>
           
          </li>
        ))}
      </ul>
      </div>
  
    </div>


   
    </div>
  )
}
