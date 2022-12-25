import * as components from './components';

const defaultComponents:any = components?.default

const vueComponents = {
    install(Vue:any) {
        Object.keys(defaultComponents).forEach(name => {
            Vue.component(name, defaultComponents[name])
        })
    }
}

export default vueComponents
export * from './components'