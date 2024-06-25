import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Controls, { Message, ImageList } from './Controls/index.js';
import './style.scss';

/**
 * Mock: https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3d3f154277a842ef2f1b06ccbf854efc-1619951517276/fe_mock.png
 */

/**
 * Message object
 * @typedef {Object} message
 * @property {string} content - The message content.
 * @property {string} user - The message sender.
 * @property {number} timestamp - The message timestamp in millieseconds.
 * @property {string} id - The message id.
 */
/**
 * @callback onMessageCallback
 * @param {message} message
 */
/**
 * window.Chat.onMessage
 * Registers a callback function to the send message event.
 * It will be triggered when a message is received in the chat.
 * Registration should be done only once.
 * The user for self messages is "Me";
 * Example: window.Chat.onMessage(message => {});
 * @param {onMessageCallback} cb the callback that handles a message.
 * @returns {void}
 */
//-----------------------------------------------------------------------
/**
 * window.Chat.sendMessage
 * Sends a message to the chat.
 * Example: window.Chat.sendMessage('Hello');
 * @param {string} text The text to be sent.
 * @returns {Promise<void>} Resolves when a message is successfully sent (and rejects otherwise).
 */
//-----------------------------------------------------------------------
/**
 * @callback onTypingCallback
 * @param {string} username
 */
/**
 * window.Chat.onTyping
 * Registers a callback function to the typing event.
 * It will be triggered when a user is typing.
 * The username for self typing is "Me";
 * Example: window.Chat.onTyping(username => {});
 * @param {onTypingCallback} cb the callback that handles a typing event.
 * @returns {void}
 */
//-----------------------------------------------------------------------

const App = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    window.Chat.onMessage((message) => {
      console.log(message);
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div className="app-wrapper">
      <div className="content-wrapper">
        {messages.map((message) =>
          message.content ? (
            <Message
              key={message.id}
              self={message.user === 'Me'}
              name={message.user}
              message={message.content}
            />
          ) : (
            <ImageList key={message.id} images={message.products} />
          )
        )}
      </div>
      <Controls />
    </div>
  );
};

render(<App />, document.getElementById('root'));
