const expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', ()=> {
  it('should generate correct message object', ()=>{
    var from = "test";
    var text = "Hello";
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage', ()=> {
  it('should generate correct location object', ()=>{
    var from = "test";
    var latitude=42;
    var longitude=1;
    var url ='https://www.google.com/maps?q=42,1';
    var message = generateLocationMessage(from, latitude,longitude);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({
      from,
      url
    });
  });
});
