//
//  pipe.ts
//  calcy
//
//  Created by d-exclaimation on 22:33.
//

/**
 * Pipeable Wrapping Object to allow method chaining using higher-order-functions
 */
export class Pipe<Value> {
  constructor(private value: Value) {}

  /**
   * Perform piping with a new function
   * @param transform Function to transform current value into a new one
   * @returns A Pipeable object with the new value
   */
  public next<Transform>(
    transform: (arg0: Value) => Transform
  ): Pipe<Transform> {
    return new Pipe(transform(this.value));
  }

  public end(): Value {
    return this.value;
  }
}

export const pipe = <Value>(initial: Value): Pipe<Value> => new Pipe(initial);
