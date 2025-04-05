const event = require('./eventModule.js');
event.on('greeting',(name)=>{
    console.log(`Hi ${name}`);
});

event.emit('greeting', 'Aya');
