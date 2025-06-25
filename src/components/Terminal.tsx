import { useState, useRef } from "react";
import Draggable from "react-draggable";

import "../styles/terminal.css";

const TerminalMac = ({ onClose }: { onClose: () => void }) => {
  const [lines, setLines] = useState<string[]>([
    `Entrer 'help' pour avoir la liste des commandes`,
  ]);
  const [input, setInput] = useState(`$ `);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    const cmd = command.trim().replace(/^\$ ?/, "").toLowerCase();

    switch (cmd) {
      case "help":
        setLines((prev) => [
          ...prev,
          "Liste des commandes disponibles :",
          "- help : Affiche cette liste de commandes",
          "- clear : Efface le terminal",
          "- exit : Ferme le terminal",
        ]);
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
        onClose();
        break;
      default:
        setLines((prev) => [...prev, `Commande inconnue: ${cmd}`]);
        break;
    }
  };

  return (
    <Draggable
      handle=".terminal-header"
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
    >
      <div className="terminal-mac" ref={nodeRef}>
        <div className="terminal-header">
          <button onClick={onClose} className="btn-close"></button>
          <span>Terminal</span>
        </div>
        <div className="terminal-body">
          {lines.map((line, index) => (
            <div key={index} className="lines">
              {line}
            </div>
          ))}
          <input
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLines((prev) => [...prev, input]);
                handleCommand(input);
                setInput(`$ `);
              }
            }}
            autoFocus
          />
        </div>
      </div>
    </Draggable>
  );
};

export default TerminalMac;
