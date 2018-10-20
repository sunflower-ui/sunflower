import * as MdComponents from './components'
import './base/index.scss'

let Sunflower = Vue => {

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent);
    console.log('ssssssss')
  })

}

Sunflower.version = '__VERSION__'

export default Sunflower
