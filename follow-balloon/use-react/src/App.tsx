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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef(MENU_LIST.map(() => createRef<HTMLLIElement>()))
  const [currentItem, setCurrentItem] = useState<HTMLLIElement | null>(null)
  const [wrapperPosition, setWrapperPosition] = useState<DOMRect | null>(null)
  const [arrowPosition, setArrowPosition] = useState(4)
  const onScrollNavi = () => {
    const calcItemPosition = currentItem?.getBoundingClientRect().left
    if (!wrapperPosition?.left || !calcItemPosition) {
      return 4
    }
    setArrowPosition(calcItemPosition === 4 ? 4 : calcItemPosition - wrapperPosition?.left)
  }

  useEffect(() => {
    const currentItemRef = menuItemsRef.current.filter((item) => /is-current/.test(String(item.current?.className)))
    if (!wrapperRef.current || !currentItemRef.length) {
      return
    }
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const currentItemLeftPosition = currentItemRef[0]?.current?.getBoundingClientRect().left ?? 4
    setCurrentItem(currentItemRef[0]?.current ?? null)
    setWrapperPosition(wrapperRect)
    setArrowPosition(currentItemLeftPosition === 4 ? 4 : currentItemLeftPosition - wrapperRect.left)
  }, [])

  return (
    <div className="wrapper" ref={wrapperRef}>
      <h1>Follow ballon</h1>
      <p className="pickupComment">
        コメント
        <span className="pickupCommentArrow" style={{left: `${arrowPosition}px`}}></span>
      </p>
      <nav className="navWrap">
        <ul className="navList" onScroll={onScrollNavi}>
          {MENU_LIST.map((item, index) => <li key={item.title} className={item.isCurrent ? 'is-current' : undefined} ref={menuItemsRef.current[index] as unknown as LegacyRef<HTMLLIElement> | undefined}>{item.title}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
