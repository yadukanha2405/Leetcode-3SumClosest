import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let check3SumClosest = (nums, target) => {
  let diff = Infinity,
    left,
    right,
    sum,
    ans;
  if (nums.length < 3) return 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) i++;
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum;
      } else if (sum > target) {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else {
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
      if (Math.abs(sum - target) < diff) {
        diff = Math.abs(sum - target);
        ans = sum;
      }
    }
  }
  return ans;
};
let nums = [-1, 2, 1, -4],
  target = 2;
// let nums = [0, 0, 0], target =1;
// let nums = [4, 0, 5, -5, 3, 3, 0, -4, -5],
//   target = -2;

let result = check3SumClosest(nums, target);
console.log(result);
