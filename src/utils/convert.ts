//
//  convert.ts
//  calcy
//
//  Created by d-exclaimation on 22:58.
//

export namespace Convert {
  export const stringToNumber = (str: string): number | null => {
    const unsafe = Number(str);
    return isNaN(unsafe) ? null : unsafe;
  };
}
