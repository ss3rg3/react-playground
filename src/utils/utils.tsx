export default function rand(): string {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16);
}
