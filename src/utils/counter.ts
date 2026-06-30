export function createCounter(start = 0) {
    let count = start;

    return {
        next: () => {
            count += 1;
            return count;
        },
        reset: () => {
            count = start;
        },
    };
}