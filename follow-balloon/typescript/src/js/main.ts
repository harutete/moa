import '../sass/style.scss';

const followComment = () => {
  const styleSheets = document.styleSheets
  const sheet = styleSheets[styleSheets.length - 1]
  const pickupComment = document.querySelector('.js-pickupComment') as HTMLDivElement
  const navigationList = document.querySelector('.js-navList')
  const targetNavigationItem = document.querySelector('.js-currentItem')

  // 追従するメニューまたはコメントがない場合は処理を終了させる
  if (!pickupComment || !targetNavigationItem) {
    return
  }

  const followBallon = () => {
    const navigationListPosition = navigationList.getBoundingClientRect().left
    const navigationItemPosition = targetNavigationItem.getBoundingClientRect().left
    const targetItemPosition = navigationItemPosition - navigationListPosition

    sheet.insertRule(
      `.js-pickupComment::before {
        left: ${targetItemPosition}px
      }`,
      sheet.cssRules.length
    )
  }

  followBallon()

  navigationList.addEventListener('scroll', () => {
    followBallon()
  })
}

window.addEventListener('DOMContentLoaded', () => {
  followComment()
})