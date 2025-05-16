export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    
    // collection_1 and collection_3 sorted ascending
    // collection_2 sorted descending
    
    collection_2 = collection_2.reverse();

    // i for collection_1 
    // j for collection_2
    // k for collection_3
    // result for merged array
    
    let i = 0, j = 0, k = 0;
    let result: number[] = [];

        while (i < collection_1.length || j < collection_2.length || k < collection_3.length) {
        let candidates: number[] = [];
        if (i < collection_1.length) candidates.push(collection_1[i]);
        if (j < collection_2.length) candidates.push(collection_2[j]);
        if (k < collection_3.length) candidates.push(collection_3[k]);
        let min = Math.min(...candidates);

        if (i < collection_1.length && collection_1[i] === min) {
            result.push(collection_1[i]);
            i++;
        } else if (j < collection_2.length && collection_2[j] === min) {
            result.push(collection_2[j]);
            j++;
        } else if (k < collection_3.length && collection_3[k] === min) {
            result.push(collection_3[k]);
            k++;
        }
    }
    return result;
}