//Typescript Solution

function miniMaxSum(arr: number[]): void {
    const sortedArray = arr.sort();
    const minArray = sortedArray.slice(0, 4);
    const reversedArray = sortedArray.reverse();
    const maxArray = reversedArray.slice(0, 4);
    let minTotal = 0;
    let maxTotal = 0;

    console.log({ minArray, maxArray, sortedArray, reversedArray })

    minArray.forEach((element) => {
        minTotal += element;
    });

    maxArray.forEach((element) => {
        maxTotal += element;
    });

    console.log(`${minTotal} ${maxTotal}`);

}
