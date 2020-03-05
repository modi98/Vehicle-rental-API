# Vehicle Rental API

Project developed by Mauricio Alvarado to simulate a vehicle rental system.

## How to use

1. Clone repository on your machine.
2. Open with terminal.
3. Run 'npm install' command.
4. To start on dev mode run 'npm run dev' command.
5. To start tests run 'npm run test' command.

## Api information

* ### /drivers
    * GET **/** Returns all drivers.

    * GET **/:driverId** Returns specific driver.

    * GET **/:driverId/vehicles** Returns all previously rented vehicles.

    * GET **/:driverId/vehicles/:vehicleId** Starts new rent with specified user and vehicle.

    * POST **/** Creates new driver.

    * PUT **/:id** Updates driver.

* ### /vehicles
    * GET **/** Returns all available vehicles.

    * POST **/** Creates new vehicle.
