import { PriorityQueue } from "./PriorityQueue";
import { Event } from "./Event";

export class TimeScheduler {
    private _scheduledEvents: PriorityQueue = new PriorityQueue();

    scheduleEvent(event: Event, delay: number = 0) {
        if(!!event) {
            this._scheduledEvents.enqueue(event, delay);
        }
    }

    nextEvent(): Event | undefined {
        let event = this._scheduledEvents.dequeueWithKey();
        if (!!event) {
            this._scheduledEvents.adjustPriorities(-event.priority);
        }
        return event?.value;
    }

    cancelEvent(event: Event) {
        this._scheduledEvents.erase(event);
    }
}