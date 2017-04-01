import BezierEasing from 'bezier-easing'
import raf from 'raf'
import scrollableParent from './scrollable-parent'

const easeOutExpo = BezierEasing(0.19, 1, 0.22, 1)

/**
 * Animation scroll
 * @param {object} target HTMLElement
 * @param {number} [during=100] (Optional) Scroll during
 */
function scrollTo (target, during = 20) {
  if (!isElement(target)) throw new Error('The first argument must be HTMLElement.')

  let start = 0
  const parent = scrollableParent(target)
  const currentScrollTop = parent.scrollTop
  const parentOffsetTop = parent.offsetTop
  let targetScrollTop
  if (parent.nodeName === 'BODY') {
    targetScrollTop = target.getBoundingClientRect().top +
      (window.scrollY || window.pageYOffset || document.body.scrollLeft) -
      parentOffsetTop
  } else {
    targetScrollTop = target.offsetTop - parentOffsetTop
  }
  const delta = targetScrollTop - currentScrollTop

  function _run () {
    start++
    const offset = easeOutExpo(start / during) * delta
    parent.scrollTop = currentScrollTop + offset
    if (start < during) raf(_run)
  }
  _run()
}

function isElement (input) {
  return input != null &&
    typeof input === 'object' &&
    input.nodeType === window.Node.ELEMENT_NODE &&
    typeof input.style === 'object' &&
    typeof input.ownerDocument === 'object'
}

export default scrollTo
