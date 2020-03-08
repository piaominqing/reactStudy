function createElement(type, config, ...children){
    if (type && type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (let propName in defaultProps) {
          if (config[propName] === undefined) {
            config[propName] = defaultProps[propName];
          }
        }
      }
    return {
        type,
        props:{
            ...config,
            children:children.map(child=> typeof child === 'object' ? child : createTextVNode(child))
        }
    }
}

function createTextVNode(txt){
    return {
        type: 'TEXT',
        props:{
            children: [],
            nodeValue: txt
        }
    }
}

export default {
    createElement
}
