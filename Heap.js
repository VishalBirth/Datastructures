const Heap = ()=> {
  let heap = [Number.MAX_INTEGER];
  const parent = (i) => i >> 1;
  const leftChild = (i) => i << 1;
  const rightChild = (i) => i << 1 | 1;
  
  const maxIndex = (i, j)=> {
    return heap[i] > heap[j]? i : j;
  }
  const swap =(i, j)=> {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  const insert = (v)=>{
    heap.push(v);
    swim(heap.length -1);
  }
  const swim = (i)=> {
    while(heap[parent(i)] < heap[i] ){
      swap(i, parent(i));
      i = parent(i)
    }
  }
  const sink = (i) => {
    let left = leftChild(i);
    let right = rightChild(i);
    while(left < heap.length && right < heap.length){
      let maxIdx = maxIndex(left, right);
      swap(maxIdx, i);
      i = maxIdx;
      left = leftChild(i);
      right = rightChild(i);
    }
    while(left < heap.length && maxIndex(left, i) !== i){
        swap(left, i);
        i = left;
        left = leftChild(i);
    }
  }
  const del = ()=> {
    if(heap.length < 2) return -1;
    if(heap.length === 2) return heap.pop();

    const first = heap[1];
    heap[1] = heap.pop();
    sink(1);
    return first;
  }
  const print = ()=> {
    console.log(heap);
  }
  return {
    insert: insert, 
    print: print,
    del: del
  }
}
