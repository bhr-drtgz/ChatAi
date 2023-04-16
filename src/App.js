import React, { useState } from "react";
import ChatAi from "./component/ChatAi";
import ImageAi from "./component/ImageAi";

function App() {
  const [isChatMode, setIsChatmode] = useState(true)

  const handleClick = () => {
    setIsChatmode(!isChatMode)
  }
  return (
    <div className="Chat-boot">
      <h1>Hayal Et</h1>
      <button onClick={handleClick}>
        {
          isChatMode ? ("Resim Moduna Geç") : ("Chat Moduna Geç")
        }
      </button>
      {
        isChatMode ? <ChatAi /> : <ImageAi />
      }
    </div>
  );
}

export default App;
