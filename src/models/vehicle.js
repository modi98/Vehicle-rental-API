const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  license_plate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'rented'],
    required: true,
    default: 'available'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
});

vehicleSchema.methods = {
  view() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      license_plate: this.license_plate,
      status: this.status
    }
  }
}

module.exports = mongoose.model('Vehicle', vehicleSchema);