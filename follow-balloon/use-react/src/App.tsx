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
  // 矢印のポジションの閾値
  const ARROW_POSITION_THRESHOLD = 4
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef(MENU_LIST.map(() => createRef<HTMLLIElement>()))
  const [currentItem, setCurrentItem] = useState<HTMLLIElement | null>(null)
  const [wrapperPosition, setWrapperPosition] = useState<DOMRect | null>(null)
  const [currentItemWidth, setCurrentItemWidth] = useState(0)
  const [arrowPosition, setArrowPosition] = useState(ARROW_POSITION_THRESHOLD)
  const calcPosition = (itemPosition?: number) => {
    if (!wrapperPosition || !itemPosition || itemPosition === ARROW_POSITION_THRESHOLD) {
      return ARROW_POSITION_THRESHOLD
    }

    if (itemPosition > wrapperPosition.right) {
      return wrapperPosition?.right - 4
    }

    return itemPosition - wrapperPosition?.left + currentItemWidth
  }
  const onScrollNavigation = () => {
    const calcItemPosition = currentItem?.getBoundingClientRect().left
    if (!wrapperPosition?.left || !calcItemPosition) {
      return ARROW_POSITION_THRESHOLD
    }
    setArrowPosition(calcPosition(calcItemPosition))
  }

  useEffect(() => {
    const currentItemRef = menuItemsRef.current.filter((item) => /is-current/.test(String(item.current?.className)))
    if (!wrapperRef.current || !currentItemRef.length) {
      return
    }
    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const currentItemLeftPosition = currentItemRef[0]?.current?.getBoundingClientRect().left ?? ARROW_POSITION_THRESHOLD
    const currentListItemWidth = currentItemRef[0]?.current?.clientWidth ? (currentItemRef[0]?.current?.clientWidth / 2) - 8 : 0
    setCurrentItem(currentItemRef[0]?.current ?? null)
    setCurrentItemWidth(currentListItemWidth)
    setWrapperPosition(wrapperRect)
    setArrowPosition(calcPosition(currentItemLeftPosition))
  }, [])

  return (
    <div className="wrapper" ref={wrapperRef}>
      <h1>Follow ballon</h1>
      <p className="pickupComment">
        コメント
        <span className="pickupCommentArrow" style={{left: `${arrowPosition}px`}}></span>
      </p>
      <nav className="navWrap">
        <ul className="navList" onScroll={onScrollNavigation}>
          {MENU_LIST.map((item, index) => <li key={item.title} className={item.isCurrent ? 'is-current' : undefined} ref={menuItemsRef.current[index] as unknown as LegacyRef<HTMLLIElement> | undefined}>{item.title}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
