export interface QueuedAction {
    value: any,
    priority: number
}

export class PriorityQueue {
    private _queue: Array<QueuedAction> = [];

    length(): number {
        return this._queue.length;
    }
    
    enqueue(value:any , priority: number = 0) {
        let element: QueuedAction = { value, priority };
        let finalPos = 0;
        let high = this._queue.length;
        let middle: number;

        // Find position to insert the QueuedAction based on its priority
        while(finalPos < high) {
            middle = (finalPos + high) / 2;
            if(element.priority < this._queue[middle].priority) {
                high = middle;
            } else {
                finalPos = middle + 1;
            }
        }

        // Insert the QueuedAction into the queue
        this._queue = this._queue.splice(finalPos, 0, element);
    }

    adjustPriorities(add: number) {
        this._queue.forEach(action => action.value += add);
    }

    dequeue(): any | undefined{
        return this._queue.pop()?.value;
    }

    dequeueWithKey(): QueuedAction | undefined {
        return this._queue.pop();
    }

    erase(value: any) {
        this._queue = this._queue.filter(action => value !== action.value);
    }
}