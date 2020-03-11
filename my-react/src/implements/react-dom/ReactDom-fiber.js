let nextUnitWork = null; // 下一个子任务
let wipRoot = null; // 根节点
let currentRoot = null; // 现在的根节点

function render(vnode, rootElement) {
    // 构建根节点fiber work
	wipRoot = {
		node: rootElement,
		props: {
			children: [vnode],
		},
		base: currentRoot,
    };
    // 将构建根节点fiber work 赋值到nextUnitWork
	nextUnitWork = wipRoot;
}

function createNode(vnode) {
	const { type, props } = vnode;
	let node;
	if (type === 'TEXT') {
		node = document.createTextNode('');
	} else if (type) {
		node = document.createElement(type);
	}
	updateNode(node, {}, props);
	return node;
}

function updateNode(node, preVal, nextVal) {
	Object.keys(nextVal)
		.filter(k => k !== 'children')
		.forEach(k => {
			if (k.slice(0, 2) === 'on') {
				// 以on开头，就认为是一个事件，源码处理复杂一些，
				let eventName = k.slice(2).toLocaleLowerCase();
				node.addEventListener(eventName, nextVal[k]);
			} else {
				node[k] = nextVal[k];
			}
		});
}

function reconcilerChildren(workInProgressFiber, children) {
	// 构建当前fiber的children的fiber结构（将children里的内容-> fiber.child和fiber.sibling）
	// 更新 删除 新增
	let prevSibling;
	let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		let newFiber = null;
		// todo 比较type key

		newFiber = {
			type: child.type, // 区分不同的fiber
			props: child.props, // 属性参数
			node: null, // 真是dom节点
			base: null, //存储fiber 便于比较
			parent: workInProgressFiber,
			effectTag: 'PLACEMENT',
		};
		// ! ???
		if (oldFiber) {
			oldFiber = oldFiber.sibling;
		}
		// children 里的第一个赋予child，第二个开始上一个fiber的sibling为当前循环的fiber
		if (i === 0) {
			workInProgressFiber.child = newFiber;
		} else {
			prevSibling.sibling = newFiber;
		}
		// sibling
		prevSibling = newFiber;
	}
}

function updateFunctionComponent(fiber) {
	const { type, props } = fiber;
	const children = [type(props)];
	reconcilerChildren(fiber, children)
}

function updateClassComponent(fiber) {
	const { type, props } = fiber;
	const component = new type(props);
	const children = [component.render()];
	reconcilerChildren(fiber, children)
}

function updateHostComponent(fiber) {
	if (!fiber.node) {
		fiber.node = createNode(fiber);
	}
	const { children } = fiber.props;
	// 协调
	reconcilerChildren(fiber, children);
}
// 执行构建当前fiber结构的work，返回下一个构建fiber的work
function performUnitOfWork(fiber) {
	// 执行当前子任务（构建当前节点fiber解构）
	const { type } = fiber;
	if (typeof type === 'function') {
        type.prototype.isReactComponent ?
        updateClassComponent(fiber) :
        updateFunctionComponent(fiber);
	} else {
		updateHostComponent(fiber);
	}
	// 返回下一个需要构建的fiber(深度优先)
	if (fiber.child) {
		return fiber.child;
	}
	let nextFiber = fiber;
	while (nextFiber) {
		if (nextFiber.sibling) {
			return nextFiber.sibling;
		}
		nextFiber = nextFiber.parent;
	}
}

function workLoop(deadLine) {
	// 有下个子任务,且当前可执行
	while (nextUnitWork && deadLine.timeRemaining() > 1) {
        // 执行当前work 并将下个work赋值到nextUnitWork
		nextUnitWork = performUnitOfWork(nextUnitWork);
	}
	if (!nextUnitWork) {
		// 当没有work需要做的时候提交（fiber构建完毕）
		commitRoot();
	}
}

function commitRoot() {
    // 从根节点开始提交
	commitWorker(wipRoot.child);
	currentRoot = wipRoot;
	wipRoot = null;
}

function commitWorker(fiber) {
	if (!fiber) {
		return;
    }
    // 查找parent
	let parentNodeFiber = fiber.parent;
	while (!parentNodeFiber.node) {
		parentNodeFiber = parentNodeFiber.parent;
	}
	const parentNode = parentNodeFiber.node;
	if (fiber.effectTag === 'PLACEMENT' && fiber.node) {
		parentNode.appendChild(fiber.node);
    }
    // 提交child work
    commitWorker(fiber.child);
    // 提交兄弟节点 work
	commitWorker(fiber.sibling);
}

requestIdleCallback(workLoop);

export default {
	render,
};
