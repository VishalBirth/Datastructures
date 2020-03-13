const SegmentTree = () =>{
  let tree = [];
  let n = 0;
  const parent = (i) => (i) >> 1;
  const left = (i) => i << 1;
  const right = (i) => i << 1 | 1;
    
  const build =(arr)=>{  
    n = arr.length;
    tree[0] = -1
    for (let i=0; i<n; i++)     
        tree[n+i] = arr[i];
    
    for (let i = n - 1; i > 0; --i)
        tree[i] = tree[left(i)] + tree[right(i)];   
  }
  
  const query=( l,  r) => {  
    let res = 0;  
    for (l += n, r += n; l < r; l = parent(l), r = parent(r)) { 
        if (l&1)
            res += tree[l++]; 
        if (r&1) 
          res += tree[--r]; 
    } 
    return res; 
  }
  
  return {build: build, rmq: query};
}
