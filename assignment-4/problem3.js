var a = [1,2,3,4,5,6,7,8];
var sum=0;
var count = 0
for(i=0;i<a.length;i++){
if(a[i]%2==0){
  sum=sum+a[i];
  count++;
}
}
var average = sum/count;
console.log(average);