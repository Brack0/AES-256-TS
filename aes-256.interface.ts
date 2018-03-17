export interface Aes256Interface {
    k: any;
    rcon: any[];
    addRoundKey(): void;
    invMixColumns(): void;
    invShiftRows(): void;
    invSubBytes(): void;
    mixColumns(): void;
    rotWord(): void;
    shiftRows(): void;
    subBytes(): void;
    subWord(): void;
}
