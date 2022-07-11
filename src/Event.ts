// import { Actor } from "./Actor.js";

// export enum EventType {
//     MoveLeft,
//     MoveRight,
//     MoveUp,
//     MoveDown
// }

// export interface Event {
//     value: EventType
//     target: Actor
// }

export interface Event {
    value: Function
}