import type React from 'react';
import { useState, useEffect, useRef, createRef, LegacyRef } from 'react';
import './App.scss';

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

const App: React.FC = () => {
  const menuItems = useRef(MENU_LIST.map(() => createRef<HTMLLIElement>()))
  const [arrowPosition, setArrowPosition] = useState(4)

  useEffect(() => {
    const currentItem = menuItems.current.filter((item) => /is-current/.test(String(item.current?.className)))
    if (!currentItem.length) {
      return
    }
    setArrowPosition(currentItem[0]?.current?.getBoundingClientRect().left ?? 4)
  }, [])

  return (
    <div className="wrapper">
      <h1>Follow ballon</h1>
      <p className="pickupComment">
        コメント
        <span className="pickupCommentArrow" style={{left: `${arrowPosition}px`}}></span>
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
