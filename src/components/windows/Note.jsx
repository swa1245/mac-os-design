import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import Markdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss";
const Note = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((data) => {
        setMarkdown(data);
      });
  }, []);
  return (
    <MacWindow>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language="markdown" style={atelierDuneDark}>{markdown}</SyntaxHighlighter>: <p>Loading...</p>}
        </div>
    </MacWindow>
  )
};

export default Note;
