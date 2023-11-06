function isAllPass(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]>=32)
    {
        return "yes";
    }else
    {
        return "no";
    }
  }
}
const arr=[7, 13, 89, 45, 98, 67, 45, 54];
console.log(isAllPass(arr));
