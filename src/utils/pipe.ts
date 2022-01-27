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

  /**
   * Perform piping with a new function
   * @param throwing Function to transform current value into a new one or throws an error
   * @returns A Pipeable object with the new value
   */
  public flatNext<Transform>(
    throwing: (arg0: Value) => Transform
  ): Pipe<Transform | null> {
    try {
      return new Pipe(throwing(this.value));
    } catch (_) {
      return new Pipe(null);
    }
  }

  /**
   * End the pipe chain by returning the original value
   * @returns The current value
   */
  public end(): Value {
    return this.value;
  }
}

export const pipe = <Value>(initial: Value): Pipe<Value> => new Pipe(initial);

export namespace Opt {
  export function map<Value, Transform>(
    transform: (_: Value) => Transform
  ): (arg: Value | null) => Transform | null {
    return (arg) => (arg ? transform(arg) : null);
  }

  export function flatMap<Value, Transform>(
    transform: (_: Value) => Transform | null
  ): (arg: Value | null) => Transform | null {
    return (arg) => (arg ? transform(arg) : null);
  }

  export function or<Value>(fallback: Value): (arg: Value | null) => Value {
    return (arg) => (arg ? arg : fallback);
  }
}
