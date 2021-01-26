
import { version } from '../package.json'

function install (app: Vue, options) {
  app.directive('brick-layout', {
    mounted(el, binding, vnode, oldVnode) {
      el.style.position = "relative"

      console.log(binding.instance)
    }
  })

  app.directive('brick-width', {
    mounted(el, binding, vnode, oldVnode) {
      const width = binding.value
      el.style.width = width
      console.log(binding.instance)
      console.log(width)
    }
  })

  app.directive('brick-item', {
    mounted(el, binding, vnode, oldVnode) {
      el.style.position = "absolute"
    }
  })
}

export default {
  version,
  install
}
