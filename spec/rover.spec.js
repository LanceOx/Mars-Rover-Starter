const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", () => {
  // Test constructor
  describe('constructor', () => {
  it("constructor sets position and default values for mode and generatorWatts", () => {
    const rover = new Rover(98382);

    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });
});
  // Test receiveMessage method
  describe('receiveMessage', () => {
  it("response returned by receiveMessage contains the name of the message", () => {
    const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(98382);
    const response = rover.receiveMessage(message);

    expect(response.results[0].completed).toBe(true);
    expect(response.results[1].completed).toBe(true);
    expect(response.results[1].roverStatus).toEqual({ mode: 'LOW_POWER', generatorWatts: 110, position: 98382});
      });
});
});// const commands = [
    //   new Command('STATUS_CHECK'),
    //   new Command('MODE_CHANGE', 'LOW_POWER'),
    //   new Command('STATUS_CHECK'),
    //   new Command('MOVE', 55555),
    //   new Command('STATUS_CHECK')
    // ];
    // const message = new Message('Test message', commands);

    // const results = rover.receiveMessage(message);

    // expect(results.message).toBe('Test message');
    // expect(results.results.length).toBe(5);

    // Write your assertions here to check if the rover correctly processes each command in the message



// describe("Rover class", function() {   // 7 tests here!
//   it("throws error if the constructor sets position and default values for mode and generatorWatts is incorrect", function(){
//     expect(Rover.position).toBe(position);
//     expect(Rover.mode).toBe('NORMAL');
//     expect(Rover.generatorWatts).toBe(110);
//   })
  

// });
