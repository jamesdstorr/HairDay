var isSquare = function(n){
   return Number.isInteger(Math.sqrt(n));
  }

 
  function findNeedle(haystack) {
    const foundIndex = haystack.findIndex(item => item === "needle");
    return foundIndex !== -1 ? `found the needle at position ${foundIndex}`:undefined;

  }
  var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
console.log(findNeedle(haystack_2))