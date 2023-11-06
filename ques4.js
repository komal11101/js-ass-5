function find_num(num1,arr,num2)
{
   for(let i=0;i<num1;i++)
   {
    if(arr[i]==num1 || num2)
    {
        return "Yes";
    }
    else{
        return "No";
    }
   }

}
const num1=5;
const num2=2;
const arr=[1,2,3,4,5];
console.log(find_num(num1,arr,num2));