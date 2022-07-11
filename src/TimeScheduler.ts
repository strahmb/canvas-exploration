import { PriorityQueue } from "./PriorityQueue";
import { Event } from "./Event";

// def __init__(self):
//         self.__scheduledEvents = PriorityQueue()

//     def scheduleEvent(self, event, delay = 0.0):
//         """
//             Schedules an event to occur after a certain delay.
//         """

//         if event is not None:
//             self.__scheduledEvents.enqueue(event, delay)

//     def nextEvent(self):
//         """
//             Dequeues and returns the next event to occur.
//         """

//         time, event = self.__scheduledEvents.dequeueWithKey()
//         self.__scheduledEvents.adjustPriorities(-time)

//         return event

//     def cancelEvent(self, event):
//         """
//             Cancels a pending event.
//         """

//         self.__scheduledEvents.erase_ref(event)

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
}