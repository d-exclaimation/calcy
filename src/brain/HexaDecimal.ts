//
//  HexaDecimal.ts
//  calcy
//
//  Created by d-exclaimation on 22:45.
//

export namespace HexaDecimal {
  /**
   * HexaDecimal string type
   */
  export type t = string;

  /**
   * Convert from integer
   * @param num Number transformed
   * @returns A HexaDecimal from that integer
   */
  export const from = (num: bigint): t => {
    const curr = num % BigInt(16);
    const rest = num / BigInt(16);

    const front = rest > 0 ? from(rest) : "";

    return front + hexadigit(curr);
  };

  export const hexadigit = (digit: bigint): t => {
    if (digit < BigInt(10)) {
      return `${digit}`;
    }

    switch (digit) {
      case BigInt(10):
        return "a";
      case BigInt(11):
        return "b";
      case BigInt(12):
        return "c";
      case BigInt(13):
        return "d";
      case BigInt(14):
        return "e";
      default:
        return "f";
    }
  };
}
