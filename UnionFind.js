const UnionFind = (n)=> {
  let k = n;
  let pid = new Array(n).fill(0).map((_,i) => i);
  
  const find = (i)=>{
    if(pid[i] === i) return i;
    pid[i] = find(pid[i]);
    return pid[i];
  }
  const union = (i, j)=>{
    let ip = find(i);
    let jp = find(j);
    if(ip === jp) return;
    pid[jp] = ip;
    k--;
  }
  const getConnectedComponents = ()=>{
    console.log(pid);
    return k
  };
  return {
    find: find, 
    union: union,
    getConnectedComponents: getConnectedComponents
  }
}
