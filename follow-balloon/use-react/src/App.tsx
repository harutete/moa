import type React from 'react';
import './App.scss';

const App: React.FC = () => {
  const calcArrowPosition = 0
  const MENU_LIST = [
    {
      title: 'menu01',
      isCurrent: false
    },
    {
      title: 'menu02',
      isCurrent: false
    },
    {
      title: 'menu03',
      isCurrent: false
    },
    {
      title: 'menu04',
      isCurrent: true
    },
    {
      title: 'menu05',
      isCurrent: false
    },
    {
      title: 'menu06',
      isCurrent: false
    },
    {
      title: 'menu07',
      isCurrent: false
    },
    {
      title: 'menu08',
      isCurrent: false
    },
    {
      title: 'menu09',
      isCurrent: false
    },
  ]

  return (
    <div className="wrapper">
      <h1>Follow ballon</h1>
      <p className="pickupComment">
        コメント
        <span className="pickupCommentArrow" style={{left: `${calcArrowPosition}px`}}></span>
      </p>
      <nav className="navWrap">
        <ul className="navList">
          {MENU_LIST.map(item => <li key={item.title} className={item.isCurrent ? 'is-current' : undefined}>{item.title}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
