/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number { 
        if (intervals.length === 0) return 0;

        let startStopArray = [];
        let roomNeeded = 0;
        let currOpenRooms = 0;


        for (let i = 0; i < intervals.length; i++) {
            startStopArray.push([intervals[i].start, 's'])
            startStopArray.push([intervals[i].end, 'e'])
        }

        startStopArray.sort((a,b) => {
            if (a[0] === b[0]) {
                return b[1] === "e" ? 0 : -1;
            }
            return a[0] - b[0];
        })

        for (let j = 0; j < startStopArray.length; j++) {
            if (startStopArray[j][1] === 's') {
                currOpenRooms += 1 ;
            } else {
                currOpenRooms -= 1 ;
            }

            roomNeeded = Math.max(currOpenRooms, roomNeeded)
        }

        return roomNeeded;
    }
}
