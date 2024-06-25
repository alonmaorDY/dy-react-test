import React, { useState } from 'react';
import './style.scss';

export default () => {
  const [messageValue, setMessageValue] = useState('');

  const sendMessage = async () => {
    try {
      const result = await window.Chat.sendMessage(messageValue);
      setMessageValue('');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="controls">
      <input
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
        placeholder="Say something"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export const Message = ({ message, self, name }) => (
  <div className={`message-wrapper ${self ? 'self' : ''}`}>
    <div className="message">
      <div className="name">{name}</div>
      <div className="content">{message}</div>
      <div className="date">14:00</div>
    </div>
  </div>
);

export const ImageList = ({ images = [] }) => (
  <div className="image-list-wrapper">
    {images.map((image) => (
      <div key={image.id}>
        <h5>{image.name}</h5>
        <img width={100} src={image.src} />
      </div>
    ))}
  </div>
);
