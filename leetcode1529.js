var minFlips = function(target) {
  let flip = 0;
  let pointer = 0;
  for (let l of target) {
      if(l^pointer == 1) flip++;
      pointer = l;
  }
  
  return flip;
};

minFlips("10111");