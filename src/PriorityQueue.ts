export interface QueuedAction {
    value: any,
    priority: number
}

export class PriorityQueue {
    private _queue: Array<QueuedAction> = [];

    enqueue(element: QueuedAction) {
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
}