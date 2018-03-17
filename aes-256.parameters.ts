abstract class Aes256Parameters {
    /**
     * Number of columns (32-bit words) comprising the State. Standard value : 4
     */
    static Nb: number = 4;

    /**
     * Number of 32-bit words comprising the Cipher Key. Standard value (AES-256) : 8
     */
    static Nk: number = 8;

    /**
     * Number of rounds, which is a function of Nk and Nb (which is fixed). Standard value (AES-256) : 14
     */
    static Nr: number = 14;
}
