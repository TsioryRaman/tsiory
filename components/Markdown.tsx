import React from "react";
import ReactMarkdown from "react-markdown";

export const Markdown: React.FC<{ source: string }> = ({ source }) => {
  return (
    <div style={{ width: "100%" }} className="devii-markdown">
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
};
