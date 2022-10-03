import React from "react";

function Button({ onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        RESET
      </button>
    </div>
  );
}

export default React.memo(Button);
