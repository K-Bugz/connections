const { Schema, model } = require("mongoose");

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    date: {
      type: string,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {}
);

const Event = model('Event', EventSchema);
module.exports = Event;
