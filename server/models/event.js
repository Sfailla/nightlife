const mongoose = require('mongoose');


const EventModel = new mongoose.Schema({
    event: {
        type: String,
    },
    location: {
        type: String,
    },
    attendees: {
        type: String,
    }
})

const Event = mongoose.model('Event', EventModel);
