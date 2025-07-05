// src/components/ItemList.js
import React, { useState } from "react";

const ItemList = ({ item }) => {
  // 为内容、难度和提示分别创建独立的 state
  const [showContent, setShowContent] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const handleTitleClick = () => {
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <li className="item-container">
      <div className="item-header">
        {/* 点击标题区域可以打开链接 */}
        <div onClick={handleTitleClick} className="title-area">
          {/* <span className="category-tag">{item.category}</span> */}
          <h3 className="item-title">{item.title}</h3>
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
      </div>
    </li>
  );
};

export default ItemList;
