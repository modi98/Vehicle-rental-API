const express = require('express');
const bodymen = require('bodymen');
const { schema } = require('../models/vehicle');
const router = express.Router();
const { model, year, license_plate } = schema.tree;
const { getAvailable, createVehicle } = require('../controllers/vehicle');

/**
 * @api {get} /vehicles
 * @apiDescription Gets all vehicles
 */
router.get('/',
  getAvailable
);

/**
 * @api {post} /vehicles
 * @param {String} model
 * @param {String} year
 * @param {String} license_plate
 * @apiDescription Create new vehicle
 */
router.post('/',
  bodymen.middleware({ model, year, license_plate }),
  createVehicle
);

module.exports = router;
