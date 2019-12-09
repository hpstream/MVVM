class Compile {
  constructor(vm) {
    var el = vm.$el;
    this.$vm = vm;
    var root = document.querySelector(el);
    this.$fragment = this.node2Fragment(root);
    this.compileElement(this.$fragment);
    root.appendChild(this.$fragment);
  }
  // 将真是dom变成内存dom,后期将可以换成虚拟dom
  node2Fragment(dom) {
    var fragment = document.createDocumentFragment();
    var child;
    while ((child = dom.firstChild)) {
      fragment.appendChild(child);
    }
    return fragment;
  }
  // 解析指令
  compileElement(el) {
    var parent = el;
    var childNodes = parent.childNodes;

    [].forEach.call(childNodes, node => {
      // 如果是注释节点，就删除掉
      if (nodeTypeUtils.isCommentNode(node)) {
        parent.removeChild(node);
      }
      // 如果是，解析改标签
      if (nodeTypeUtils.isElementNode(node)) {
        this.compile(node);
      }
      // 暂时不处理
      if (nodeTypeUtils.isTextNode(node)) {
      }

      // 处理子节点，递归
      if (node.childNodes && node.childNodes.length) {
        this.compileElement(node);
      }
    });
  }

  compile(node) {
    // 获取所有属性
    var attrs = node.attributes;
    [].forEach.call(attrs, attr => {
      var attrName = attr.name;
      if (compileUtil.isDirective(attrName)) {
        var exp = attr.value;
        var directive = attrName.substring(2);
        parseDirective.call(this, node, this.$vm, exp, directive);
        node.removeAttribute(attrName);
      }
    });
  }

  _getVMval(vm, exps) {
    if (!exps) return Error(`${exps} is undefined`);
    var value = vm.$data;
    var exparr = exps.split(".");
    for (let i = 0; i < exparr.length; i++) {
      if (value === undefined) return Error(`${exps} is undefined`);
      value = value[exparr[i]];
    }
    return value;
  }
}

function parseDirective(node, vm, exp, directive) {
  updaterDOM[directive](node, this._getVMval(vm, exp));
}

var updaterDOM = {
  text(node, value) {
    node.textContent = typeof value == "undefined" ? "" : value;
  },
  model(node, value) {
    node.value = typeof value == "undefined" ? "" : value;
  }
};

var compileUtil = {
  isDirective(name) {
    return name.indexOf("b-") == 0;
  },
  isEventDirective(attr) {}
};

var nodeTypeUtils = {
  isElementNode(node) {
    return node.nodeType == 1;
  },
  isCommentNode(node) {
    return node.nodeType == 8;
  },
  isTextNode(node) {
    return node.nodeType == 3;
  }
};
