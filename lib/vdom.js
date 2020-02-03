/* eslint-disable no-unused-vars */
const vnodeType = {
  HTML: "HTML",
  TEXT: "TEXT",
  // 不分析的两种
  COMPONENT: "COMPONENT",
  CLASS_COMPONENT: "CLASS_COMPONENT"
};
const childType = {
  EMPTY: "EMPTY",
  SINGLE: "SINGLE",
  MULTIPLE: "MULTIPLE"
};

function createElement(tag, data, children = null) {
  let flag;
  if (typeof tag == "string") {
    flag = vnodeType.HTML;
  } else {
    flag = vnodeType.TEXT;
  }
  let childrenFlag;
  if (children == null) {
    childrenFlag = childType.EMPTY;
  } else if (Array.isArray(children)) {
    let length = children.length;
    if (length == 0) {
      childrenFlag = childType.EMPTY;
    } else {
      childrenFlag = childType.MULTIPLE;
    }
  } else {
    childrenFlag = childType.SINGLE;
    children = createTextVnode(children + "");
  }

  // 返回vnode 类型
  return {
    flag,
    tag,
    data,
    children,
    childrenFlag
  };
}

function createTextVnode(text) {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childType.EMPTY,
    elm: null
  };
}

function render(vnode, container) {
  // 区分首次渲染和非首次渲染
  mount(vnode, container);
}

function mount(vnode, container) {
  // 根据 vnodeType的不同，走不通的渲染函数
  if (vnode.flag === vnodeType.HTML) {
    mountElement(vnode, container);
  } else {
    mountText(vnode, container);
  }
}

function mountElement(vnode, container) {
  // 渲染节点
  var el = document.createElement(vnode.tag);
  vnode.elm = el;
  var { childrenFlag, children, data } = vnode;
  // 处理属性
  if (data) {
    Object.keys(data).forEach(key => {
      patchData(el, key, null, data[key]);
    });
  }

  // 判断子节点类型：
  if (childrenFlag == childType.MULTIPLE) {
    for (let i = 0; i < children.length; i++) {
      mount(children[i], el);
    }
  } else if (childrenFlag == childType.SINGLE) {
    mount(children, el);
  }

  container.appendChild(el);
}

function mountText(vnode, container) {
  // 渲染文本
  var text = document.createTextNode(vnode.children);
  vnode.elm = text;
  container.appendChild(text);
}

function patchData(el, key, prv, next) {
  // 渲染属性和事件≈
  switch (key) {
    case "style":
      Object.keys(next).forEach(key => {
        el.style[key] = next[key];
      });
      break;
    case "class":
      el.className = next;
      break;
    default:
      if (key.indexOf("@") == 0) {
        console.log(key.slice(1));
        el.addEventListener(key.slice(1), next, false);
      } else {
        el.setAttribute(key, next);
      }
      break;
  }
}
