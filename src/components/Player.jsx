import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isInputVisible, setInputVisible] = useState(false);

  function handleEditClick() {
    setInputVisible((editing) => !editing);

    if (isInputVisible) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isInputVisible) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
      <button onClick={handleEditClick}>
        {isInputVisible ? "Save" : "Edit"}
      </button>
    </>
  );
}
