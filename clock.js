class Clock {
    constructor() {
      //   1. Create a Date object.
      //   2. Store the hours, minutes, and seconds.
      //   3. Call printTime.
      //   4. Schedule the tick at 1 second intervals.
    
      const clock = new Date();
     
      this.hours = clock.getHours();
      this.minutes = clock.getMinutes();
      this.seconds = clock.getSeconds();

      
      this.printTime();
    
      setInterval(this._tick.bind(this), 1000);
    }

  
    printTime() {
      let currentTime = `${this.hours}:${this.minutes}:${this.seconds}`
      console.log( currentTime)
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      (this._addSeconds());
      (this.printTime());
      
     
    }
      
      _addSeconds () { 
          (this.seconds += 1);
        if (this.seconds === 60) {
          (this.seconds = 0);
          (this._addMinutes());
        }
      }
    
      _addMinutes () { 
        (this.minutes += 1);
        if (this.minutes === 60) {
          (this.minutes = 0);
          (this._addHours());
        }
      }
      
      _addHours () { 
        (this.hours += 1); 
        if (this.hours === 24) {
          (this.hours === 0);
        }
      }
  
    
}   
  
  const clock = new Clock();