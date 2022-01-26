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
    const curr = num % 16n;
    const rest = num / 16n;

    const front = rest > 0 ? from(rest) : "";

    return front + hexadigit(curr);
  };

  export const hexadigit = (digit: bigint): t => {
    if (digit < 10n) {
      return `${digit}`;
    }

    switch (digit) {
      case 10n:
        return "a";
      case 11n:
        return "b";
      case 12n:
        return "c";
      case 13n:
        return "d";
      case 14n:
        return "e";
      default:
        return "f";
    }
  };
}
