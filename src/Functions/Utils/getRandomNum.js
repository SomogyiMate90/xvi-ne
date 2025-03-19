export default function getRandumNum(max=100, min=0) {
    const randumNum = Math.floor(Math.random() * (max + 1 - min)) + min;

    return randumNum;
}