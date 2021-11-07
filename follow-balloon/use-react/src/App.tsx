import type React from 'react';
import './App.scss';

const App: React.FC = () => {
  const MENU_LIST = [
    'menu01',
    'menu02',
    'menu03',
    'menu04',
    'menu05',
    'menu06',
    'menu07',
    'menu08',
    'menu09',
  ]

  return (
    <div className="wrapper">
      <h1>Follow ballon</h1>
      <div className="pickupComment">
        <p>コメント</p>
      </div>
      <nav className="navWrap">
        <ul>
          {MENU_LIST.map(item => <li key={item}>{item}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
