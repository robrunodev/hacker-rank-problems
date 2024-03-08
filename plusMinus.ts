'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
