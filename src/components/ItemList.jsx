import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const ItemList = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleTitleClick = () => {
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <li className="item-container">
      <div className="item-header">
        {/* 点击标题区域可以打开链接 */}
        <div onClick={handleTitleClick} className="title-area">
          {/* <span className="category-tag">{item.category}</span> */}
          <h3 className="item-title">{item.id} {item.title}{item.isHot100 !== false && " 🔥"}</h3>
        </div>
        <button onClick={() => setShowDifficulty(!showDifficulty)}>
          {showDifficulty ? item.difficulty : "展开难度"}
        </button>
        <button onClick={() => setShowCategory(!showCategory)}>
          {showCategory ? item.category : "展开分类"}
        </button>
      </div>

      {/* 控制按钮区域 */}
      <div className="button-group">
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? "收起内容" : "展开内容"}
        </button>

        <button onClick={() => setShowHint(!showHint)}>
          {showHint ? "收起提示" : "展开提示"}
        </button>

        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? "收起代码" : "展开代码"}
        </button>
      </div>

      {/* 详情内容区域 */}
      <div className="item-details">
        {showContent && (
          <p>
            <strong>内容：</strong> {item.content}
          </p>
        )}

        {showHint && (
          <p>
            <strong>提示：</strong> {item.hint}
          </p>
        )}

        {showCode && (
          <p>
            <SyntaxHighlighter
              language="typescript"
              style={oneLight}
              showLineNumbers
            >
              {item.code ?? "暂无代码"}
            </SyntaxHighlighter>
          </p>
        )}
      </div>
    </li>
  );
};

export default ItemList;
