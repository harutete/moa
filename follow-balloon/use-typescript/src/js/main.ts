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
    // 左側の矢印の閾値　（角丸部分を考慮して4pxに設定）
    const MIN_THRESHOLD_POSITION = 4
    // 吹き出しの矢印の幅
    const BALLON_ARROW_WIDTH = 16
    const pickupCommentWidth = pickupComment.offsetWidth
    const navigationListPosition = navigationList.getBoundingClientRect().left
    const navigationItemPosition = targetNavigationItem.getBoundingClientRect().left
    const targetItemPosition = navigationItemPosition - navigationListPosition
    const calcTargetItemPosition = () => {
      if (targetItemPosition < MIN_THRESHOLD_POSITION) {
        return MIN_THRESHOLD_POSITION
      }
      if (targetItemPosition > pickupCommentWidth - MIN_THRESHOLD_POSITION) {
        console.log(pickupCommentWidth - MIN_THRESHOLD_POSITION)
        return pickupCommentWidth - (MIN_THRESHOLD_POSITION + BALLON_ARROW_WIDTH)
      }

      return targetItemPosition
    }

    sheet.insertRule(
      `.js-pickupComment::before {
        left: ${calcTargetItemPosition()}px
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