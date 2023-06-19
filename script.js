function threeSum(arr, target) {
// write your code here
	  arr.sort(function (a,b){
            return a-b;
        });
        console.log(arr);
        d=Number.MAX_VALUE; nearsum=arr[0]+arr[1]+arr[2];
        for(let i=0;i<arr.length-2;i++){
            let j=i+1;    
			let k=j+1;
                while(j<k){
                    sum=arr[i]+arr[j]+arr[k];
                    if(sum==target){
                        return sum;
                    }
                    else if(sum>target){
                       k--;
                    }
                    else j++;
                let diff=Math.abs(sum-target);
                    if(diff<d){
                        d=diff; nearsum=sum;
					}    }
        }
        
      return nearsum;
}

module.exports = threeSum;
