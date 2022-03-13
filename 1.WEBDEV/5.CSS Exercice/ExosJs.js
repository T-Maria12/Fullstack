// Remove a specific Element from an array 
function remouve(arr,x){
    let n=arr.length
    let index=-1;
for(let i=0; i<n;i++){
    if(arr[i]==x){
        index=i;
        break;
    }
}
if(index != -1)
{
    for(i=index;i<n-1;i++)
    arr[i]=arr[i+1];
    arr.length=arr.length-1;
} 
else console.log("element not found in: ");
return arr;
  
};
console.log(remouve([0,1,2,3,4,5],0));
// a function that Removes Duplicates from Sorted Array and returns the new length
 function DelDup(arr){
     if(arr.length == 0)
     return 0;
     let i=0;
     for(let j = 1;j<arr.length;j++){
         if(arr[j]!==arr[i]){
             i++;
             arr[i]=arr[j];
         }
     }
     return i+1
 };
 console.log(DelDup([1,2,2,5]));
