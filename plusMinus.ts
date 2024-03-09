function plusMinus(arr: number[]): void {

    const arrLength = arr.length
    const positiveNumbersProportion: number = arr.filter(num => Math.sign(num) === 1).length / arrLength
    const negativeNumbersProportion: number = arr.filter(num => Math.sign(num) === -1).length / arrLength
    const zeroNumbersProportion: number = arr.filter(num => Math.sign(num) === 0).length / arrLength

    // const proportions: Array<string> = [
    //     positiveNumbersProportion.toFixed(6),
    //     negativeNumbersProportion.toFixed(6),
    //     zeroNumbersProportion.toFixed(6)
    // ]

    // proportions.map(proportion => {
    //    console.log(proportion) 
    // })

    // OR simple method

    console.log(positiveNumbersProportion.toFixed(6))
    console.log(negativeNumbersProportion.toFixed(6))
    console.log(zeroNumbersProportion.toFixed(6))

}

