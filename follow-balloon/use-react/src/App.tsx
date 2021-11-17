import type React from 'react';
import { useRef, createRef, LegacyRef } from 'react';
import './App.scss';

const App: React.FC = () => {
  const menuItems = useRef<HTMLLIElement[]>([])
  console.log({menuItems})
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
  MENU_LIST.forEach((_, index) => {
    menuItems.current[index] = createRef() as unknown as HTMLLIElement
  })
  return (
    <div className="wrapper">
      <h1>Follow ballon</h1>
      <p className="pickupComment">
        コメント
        <span className="pickupCommentArrow" style={{left: `${calcArrowPosition}px`}}></span>
      </p>
      <nav className="navWrap">
        <ul className="navList">
          {MENU_LIST.map((item, index) => <li key={item.title} className={item.isCurrent ? 'is-current' : undefined} ref={menuItems.current[index] as unknown as LegacyRef<HTMLLIElement> | undefined}>{item.title}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
