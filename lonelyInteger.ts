function lonelyInteger(a: number[]): number {
    // Write your code here

    const test: number = a.map(item => {
        const testArr = a.filter(n => n === item).length
        if (testArr) {
            return item
        }
    })
    .find(n => n !== undefined)
    
    return test
}