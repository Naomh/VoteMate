function* bruteforce(votes, candidates) {
    const current = new Array(candidates).fill(0);

    while (true) {
        const sum = current.reduce((a, b) => a + b, 0);
        if (sum === votes) {
            yield [...current];
        }

        let i = candidates - 1;
        while (i >= 0 && current[i] === votes) {
            current[i] = 0;
            i--;
        }

        if (i < 0) break;
        current[i]++;
    }
}

module.exports={
    bruteforce
}

