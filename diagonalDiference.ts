function diagonalDifference(arr: number[][]): number {

    const primaryDiagonal = arr.map((item, i) => {
        return item[i]
    }).reduce((sum, item) => {
        return sum + item
    }, 0)
    
    const secondDiagonal = arr.map((item, i) => {
        const line = item.length
        return item[line - i - 1]
    }).reduce((sum, item) => {
        return sum + item
    }, 0)
    
    const absoluteDiference = Math.abs(primaryDiagonal - secondDiagonal)
    

    console.log({ primaryDiagonal, secondDiagonal, absoluteDiference })

    return absoluteDiference
}