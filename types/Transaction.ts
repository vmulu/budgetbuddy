
// add comments (victoria)
export type Transaction = {
    id: string,

    // income or expense
    type: string,

    amount: number,
    category: string,

    // might need to change to some date data type
    date: string,

    notes: string,
}