// Do the below programs in anonymous function & IIFE
// a . Print Odd numbers in an Array
    // Anonymous function
   var oddNum = fuction(arr){
        var temp=[];
        for (var i=0;i<arr.length;i++){
            if(arr[i]%2==1) {
                temp.push(arr[i]);
                }
                return temp;
        }
    }
        var arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(oddNum(arr));

        // IIFE function
        var arr1=[11,12,13,14,15,16,17,18,19,20];
        function(arr){
            var temp = [];
            for (var i =0; i<arr.length;i++){
                if(arr[i]%2==1){
                    temp.push(arr[i]);
                }
            }
            console.log(temp);
        }(arr)

//b. Convert all the string to title caps in a string array
        //Anonymous fuction
        var titleCap = function(str){
            var a = str.length;
            for(var i=1;i<=a;i++){
            if (str[i] == " ")
            {
              var str1 = str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
            }
          }
          return str1;
          }
          var str = "today is hotter than yesterday";
          console.log(titleCap(str));

        //IIFE Function
        var str = "all is well";
        var a = str.length;
        (function(str){
        for(var i=1;i<=a;i++){
        if (str[i] == " ")
        {
            var str1 = str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        }
        }
        console.log(str1);
        })(str)
        


// c. Sum of all numbers in array
    // Anonymous fuction
        var sum = function(arr){
            var a=0;
            for (var i=0;i<arr.length;i++){
                a=a+arr[i];
            }
            return a;
        }
        var arr = [1,2,3];
        console.log(sum(arr));

    // IIFE fuction
        var arr=[4,5,6];
        (function(arr){
            var b=0;
            for( var i=0;i<arr.length;i++){
                b=b+arr[i];
                }
            console.log(b);
        })(arr);
// e. Return all the palindorme 
        //Anonymous functio
        var array = "madam";
        var pl= (function(array){
     
        var array1 = [];
        for(var i=array.length-1;i>=0;i--){
            array1.push(array[i])
            }
        if(array == array1)
        {
            console.log(false);
            
        }
        else
        {
            console.log(array1);
        }
        })(array)

    // IIFE fuction
         var array = "madam";
        (function(array){
            
        var array1 = [];
        for(var i=array.length-1;i>=0;i--){
            array1.push(array[i])
        }
        if(array == array1)
        {
            console.log(false);
            
        }
        else
        {
            console.log(array1);
        }
        })(array)

    //f. Return medain of two sorted arrays in the same size.
        // Anonymous Function
            var median=(function(arr1,arr2){
            arr1.sort();
            arr2.sort();
            var a = arr1.length;
            var b = arr2.length;
            if (a%2 == 0 && b%2 == 0)
            {
              var c=((a/2)-1);
              var e=(c+1);
              var d=((b/2)-1);
              var f=(d+1);
              var g = ((arr1[c]+arr1[e])/2)
              var h = ((arr2[d]+arr2[f])/2)
            }
            return [g,h];
            })
            var arr1=[11,12,13,14,15,16];
            var arr2=[26,21,24,22,25,23];
            console.log(median(arr1,arr2));

        // IIFE Function
            var arr1=[11,12,13,14,15,16];
            var arr2=[26,21,24,22,25,23];
            (function(arr1,arr2){
            arr1.sort();
            arr2.sort();
            var a = arr1.length;
            var b = arr2.length;
            if (a%2 == 0 && b%2 == 0)
            {
            var c=((a/2)-1);
            var e=(c+1);
            var d=((b/2)-1);
            var f=(d+1);
            var g = ((arr1[c]+arr1[e])/2)
            var h = ((arr2[d]+arr2[f])/2)
            }
            console.log("Median of arr1 is:"+g);
            console.log("Median of arr2 is:"+h);
            })(arr1,arr2)

    //g. Remove the duplicates from an array 
        // Anonymous Function
            var dup=(function(num){
            var i = 0;
            var temp =[];
            for (var i of num)
            {
             if (temp.indexOf(i) === -1){
             temp.push(i);
             }
            }
            return temp
            })
            var num = [1,2,3,4,5,2,3,3,4];
            console.log(dup(num));
        // IIFE Function 
            var num = [32,34,32,35,36,40,42,42];
            (function(num){
            var i = 0;
            var temp =[];
            for (var i of num)
            {
            if (temp.indexOf(i) === -1){
            temp.push(i);
            }
            }
            console.log(temp);
            })(num)
    
    //h. Return an array K times.
        // Anonymous fuction
        var num = [1,2,3,4,5];
        var iterate=(function(num,n){
        if(n== undefined)
        {
            console.log("Please mention the Time of times to print the array")
        }
        if(n<=0)
        {
            console.log("Please enter the valid number");
        }
        if(n>0)
        {
            for(var i=1;i<=n;i++)
            {
            console.log(num); 
            }
        }
        })
        console.log(iterate(num,3));

    // IIFE Function
        var num = [11,12,13,14,15];
        (function(num,n){
        if(n== undefined)
        {
        console.log("Please mention the Time of times to print the array")
        }
        if(n<=0)
        {
        console.log("Please enter the valid number");
        }
        if(n>0)
        {
        for(var i=0;i<n;i++)
        {
            console.log(num); 
        }
        }
        })(num,4)


//Do the below programs in arrow function
    //a. Print the odd number.
    var oddNum2 = (arr) => {
        var temp = [];
        for (var i=0;i<arr.length;i++)
        {
            if (arr[i]%2 == 1)
            {
                temp.push(arr[i]);
            }
        }
    return temp
    };
      var arr = [21,22,23,24,25,26,27,28,29,30];
      console.log(oddNum2(arr));
    
    //b. Convert all the string to title caps in a string array
    var titleCap1 = (str) => {
        var a = str.length;
        for(var i=1;i<str.length;i++){
        if (str[i] == " ")
        {
          var str1 = str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        }
      }
      return str1;
      }
      var str = "today is a good day";
      console.log(titleCap1(str));

      //c. Sum of all numbers in array
      var sum2 = (arr) => {
        var temp = [];
        var a = 0;
        for (var i=0;i<arr.length;i++)
        {
            temp.push(parseInt(arr[i]));
            a = a + temp[i];
        }
        return a;
    }
    var arr = [7,8,9];
    console.log(sum2(arr));

    //e. Palindrome

    var Pal = (array) => {
        var array1 = [];
        for(var i=array.length-1;i>=0;i--){
            array1.push(array[i])
        }
        if(array == array1)
        {
          console.log(false);
          
        }
        else
        {
          console.log(array1);
        }
       }
       var array = "madam";
      console.log(Pal(array));
  
  
  