import { Event } from "./Event.js";

export interface QueuedEvent {
    value: Event,
    priority: number
}

export class PriorityQueue {
    private _queue: Array<QueuedEvent> = [];

    length(): number {
        return this._queue.length;
    }
    
    enqueue(value:Event , priority: number = 0) {
        let element: QueuedEvent = { value, priority };
        let finalPos = 0;
        let high = this._queue.length;
        let middle: number;

        // Find position to insert the QueuedEvent based on its priority
        while(finalPos < high) {
            middle = (finalPos + high) / 2;
            if(element.priority < this._queue[middle].priority) {
                high = middle;
            } else {
                finalPos = middle + 1;
            }
        }

        // Insert the QueuedEvent into the queue
        this._queue = this._queue.splice(finalPos, 0, element);
    }

    adjustPriorities(add: number) {
        this._queue.forEach(event => event.priority += add);
    }

    dequeue(): Event | undefined{
        return this._queue.pop()?.value;
    }

    dequeueWithKey(): QueuedEvent | undefined {
        return this._queue.pop();
    }

    erase(value: Event) {
        this._queue = this._queue.filter(event => value !== event.value);
    }
}