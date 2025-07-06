import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import initialData from './data';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 初始加载数据
    setItems(initialData);
  }, []);

  // 随机排序函数
  const shuffleItems = () => {
    // 使用 sort 和 Math.random 实现随机排序
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LeetCode Hot 100 ({items.length} / 100)</h1>
        <button onClick={shuffleItems} className="shuffle-button">
          随机排序
        </button>
      </header>
      <main>
        <ul className="items-list">
          {items.map(item => (
            <ItemList key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;