function render(vnode, rootElement){
  const node = createNode(vnode)
  rootElement.appendChild(node)
}

function createNode(vnode){
    const {type,props} = vnode
    let node
    if(type === 'TEXT'){
        node = document.createTextNode("");
    }else if(typeof type === 'function'){
        node = type.prototype.isReactComponent ? createClassComponent(vnode) : createFuntionComponent(vnode)
    }else if(type){
        node = document.createElement(type)
    }else{
        node = document.createDocumentFragment(type)
    }
    updateNode(node, props)
    reconcilerChildren(props.children, node)
    return node
}

function updateNode(node, props){
    Object.keys(props).filter(key => key !== 'children').forEach(key=>{
        if(key.slice(0,2)==='on'){
            let eventName = key.slice(2).toLocaleLowerCase();
            node.addEventListener(eventName, props[key]);
        }else{
            node[key] = props[key] 
        }
      }
    )
}

function reconcilerChildren(children, node){
    children.map(child=>{
        if(Array.isArray(child)){
            child.map(arr=>{
                render(arr,node)
            })
        }else{
            render(child,node)
        }
    })
}

function createFuntionComponent(vnode){
    const {type, props} = vnode
    const functionNode = type(props) 
    const node = createNode(functionNode)
    return node
}

function createClassComponent(vnode){
    const {type,props} = vnode
    const component = new type(props)
    const classNode = component.render()
    const node = createNode(classNode)
    return node
}

export default {
  render
}