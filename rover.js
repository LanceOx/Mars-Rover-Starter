class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      const results = [];

      for (const command of message.commands) {
         const result = {};

         if(command.commandType === 'MODE_CHANGE') {
            result.completed = true;
            result.roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
            };
         } else {
            result.completed = false;
            result.message = 'Invalid command';
         }

         results.push(result);
      }

      return {
         message: message.name,
         results: results
      };
   }
}

   
module.exports = Rover;