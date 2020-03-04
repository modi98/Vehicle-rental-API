const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
    min: 18
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  driver_license: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
});

driverSchema.methods = {
  view() {
    return {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      driver_license: this.driver_license,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}

module.exports = mongoose.model('Driver', driverSchema);