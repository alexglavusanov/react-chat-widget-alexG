import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from 'src/store/types';

const send = require('../../../../../../../assets/send_button.svg') as string;

import './style.scss';

type Props = {
  placeholder: string;
  disabledInput: boolean;
  value: string;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
}

function Sender({ sendMessage, placeholder, disabledInput, autofocus, value, onTextInputChange, buttonAlt }: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef(null);
  // @ts-ignore
  useEffect(() => { if (showChat) inputRef.current?.focus(); }, [showChat]);

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <input
        value={value}
        type="text"
        className="rcw-new-message"
        name="message"
        ref={inputRef}
        placeholder={placeholder}
        disabled={disabledInput}
        autoFocus={autofocus}
        autoComplete="off"
        onChange={onTextInputChange}
      />
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
