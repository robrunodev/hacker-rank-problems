function countingSort(arr: number[]): number[] {
    const maxLength = 100
    const result = new Array(maxLength).fill(0)

  // with forEach more simple for me
  arr.forEach((value) => {
      console.log(result[value])
      result[value]++
  })
  
  return result

}