function findevenodd(num,A)
{
    let B=[0,0];
    for(let i=0;i<num;i++)
    {
        if(A[i]%2===0)
        {
            B[0] += A[i];
        }
        else{
            B[1] += A[i];
        }
       
    }
    return B;
}
const n=7;
const A=[ 1, 2 ,3 ,4 ,5, 6, 7];
console.log(findevenodd(n,A));
