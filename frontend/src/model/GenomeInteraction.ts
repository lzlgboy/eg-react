import ChromosomeInterval from './interval/ChromosomeInterval';

export class GenomeInteraction {
    constructor(public locus1: ChromosomeInterval, public locus2: ChromosomeInterval, public score: number) {
        this.locus1 = locus1;
        this.locus2 = locus2;
        this.score = score;
    }
}
