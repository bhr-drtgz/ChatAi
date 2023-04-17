 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnswer1, getDataStart } from '../app/actions/chatActions'

const ChatAi = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.chatState)

    const handleSubmit = () => {
        dispatch(getDataStart());
        dispatch(getAnswer1());
    }
    console.log(state)

    return (
        <div className='chat'>
            <div className='list'>
                Liste
            </div>
            <div className='form'>
                <input type='text' placeholder='YaPaY ZeKaDaN BiRşEy IsTeYin' />
                <button onClick={handleSubmit}>
                    Gönder
                </button>
            </div>
        </div>
    )
}

export default ChatAi