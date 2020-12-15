/**
 * DebuggerObj type definitions
 *
 */

declare module "debuggerObj" {
 

  export class DebuggerObj {
    constructor(mode: string, clickCount: Number, second: Number);
    innerCheckDebugger(): void;
    static checkDebugger(mode: string): DebuggerObj;
    startDebugger(): void;
  }

  export default DebuggerObj;
}
