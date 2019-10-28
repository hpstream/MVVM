function ProxyData(data) {
  // 判断是否数据是json 对象
  if (typeof data !== 'object') return console.error(new Error('data is no not object'));
  (Error('data is not object'));

  for (let key in data) {
    let val = data[key]; // 
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get() {
        console.log(key);
        return val
      },
      set(newVal) {
        console.log(newVal);
        if (newVal === val) return;
        val = newVal
      }
    })
  }


  return data;
}
