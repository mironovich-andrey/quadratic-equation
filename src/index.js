module.exports = function solveEquation(equation) {
  // your implementation

   var arr1 = [];
   var arr = equation.split(' ');
   var a = (arr[0]);
   var b = (arr[3]+ arr[4]);
   var c = (arr[7]+ arr[8]);
   var d = (b*b - 4 * a * c);    

   if (d>0)
   {
       var d = Math.round(Math.sqrt(d));
       console.log(d);
       arr1[0] = ((-b)+d)/(2*a);
       arr1[1] = ((-b)-d)/(2*a);
   }

   else
   {
       return null;
   }

   Math.round(arr1);
   arr1.sort(compareNumeric);
   return arr1;
}

function compareNumeric(x, y)
{
   return x - y;
} 