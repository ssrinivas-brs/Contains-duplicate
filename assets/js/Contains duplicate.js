function checkDuplicates() {
    const nums = document.getElementById('nums').value.split(',').map(num => parseInt(num.trim()));
    const hasDuplicates = containsDuplicate(nums);
    console.log(nums); // Log the array of numbers
    console.log(" return:", hasDuplicates ? 'True' : 'False'); // Log whether duplicates exist
    alert(hasDuplicates ? 'True' : 'Flase');
  }
  
  var containsDuplicate = function(nums) {
    const numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (numSet.has(nums[i])) {
        return true;
      }
      numSet.add(nums[i]);
    }
    return false;
  };