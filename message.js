class Message {
   constructor(messageType, value) {
      this.messageType = messageType;
      if (!messageType) {
         throw Error("Name parameter is required.")
      }
      this.value = value;
   }
} 

module.exports = Message;

