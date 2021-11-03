import '../sass/style.scss';

const followComment = () => {
  const pickupComment = document.querySelector('.js-pickupComment') as HTMLDivElement
  const navigationList = document.querySelector('.js-navList')
  const targetNavigationItem = document.querySelector('.js-currentItem')

  // 追従するメニューまたはコメントがない場合は処理を終了させる
  if (!pickupComment || !targetNavigationItem) {
    return
  }

  const navigationListPosition = navigationList.getBoundingClientRect().left
  const navigationItemPosition = targetNavigationItem.getBoundingClientRect().left
  const targetItemPosition = navigationItemPosition - navigationListPosition

  // TODO 擬似要素はJSで制御できないのでスタイルシートを上書きするようにする
  // pickupComment.style.left = `${targetItemPosition}px`
}

window.addEventListener('DOMContentLoaded', () => {
  followComment()
})