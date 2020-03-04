# Vehicle Rental

Create an API that covers the following requirements

The following applies for all the endpoints

* The content type should be return as "application/json"
* If the request is successful the status code should be 200
* The data returned should be in json format
* The data should be enveloped in property called **data**
* If a property is missing in the payload, the status code in the response should be set as 400
* If a property is missing in the payload, the following message should be returned "Property {property_name} is required"
* If more than one property is missing in the payload the following message should be returned "The following properties are required: {properties separated by comas}"
* If an error ocurred during a db call, the status code of the response should be returned as 500
* An auth layer should be added for all the endpoints, this layer should decode a JWT to validate the authentication

## Driver Endpoints

1. Create an endpoint with the following signature

**Method:** GET

```
/drivers?filter={property to filter by}&value={value to be use in the filter}
```
* All query params are optional
* Should return a list of all the available drivers in the db if no query param is provided
* If a query params are provided, the results should be filtered based on the criteria provided
* If just one query param is provided, the status code should be set as 204
* If just one query param is provided, the following message should be returned "The {missing query param} is has not being provided"
* The response data structure should be like the following

|  Type  |      Field     |
|:------:|:--------------:|
| string |       id       |
| number |       age      |
| string |   first_name   |
| string |    last_name   |
| string | driver_license |


2. Create an endpoint with the following signature
**Method:** GET

```
/drivers/{driver_id}
```
* If a driver is found, return it's data
* The data structure should be like the following

|  Type  |      Field     |
|:------:|:--------------:|
| string |       id       |
| number |       age      |
| string |   first_name   |
| string |    last_name   |
| string | driver_license |

* If a driver is not found the endpoint should return 204 as status code
* If a driver is not found a property called "message" with the following text should be returned "There isn't a driver with the id: ${id_provided}"

3. Create an endpoint that allows the users to create new drivers in the db

```
/drivers
```
**Method:** POST

* The payload model should look like this

|  Type  |      Field     |
|:------:|:--------------:|
| number |       age      |
| string |   first_name   |
| string |    last_name   |
| string | driver_license |

* The API should generate uuid and use it to set the id property
* The id shouldn't be provided

4. Create an endpoint that allows the users to update the driver information

* At least one property to update is required
* The endpoint signature is the following

**Method:** PUT

```
/drivers/{driver_id}
```

* If the provided driverd id don't have a match with the entries in the db, the response status should be set as 204
* If the provided driver id don't have a match with an entrie in the db, the foillowing message should be returned: "Driver with {id provided} hasn't not been found."

---

## Vehicle endpoints

1. Create an endpoint with the following signature

**Method:** GET

```
/vehicles
```
* Should return a list of all the available vehicles in the db.
* The response should have the following data structure

|  Type  |      Field     |
|:------:|:--------------:|
| string |       id       |
| string |      model     |
| string |      year      |
| number | vehicles_available |


2. Create an endpoint with the following signature
**Method:** GET

```
/drivers/{driver_id}/vehicles
```

* Should return all rented vehicles of the specified driver
* The response data structure should be like the following

|  Type  |      Field     |
|:------:|:--------------:|
| string |       id       |
| string |      model     |
| string |      year      |

* If no vehicle or no driver is found the endpoint should return 204 as status code
* If no vehicle is found the endpoint should return a property called "message" with the following text as value "There isn't a vehicles rented by {driver name}"
* If a driver is not found a property called "message" with the following text should be returned "There isn't a driver with the id: ${id_provided}"

3. Create an endpoint that allows the users to associate a vehicle with a driver in the db

```
/drivers/{driver_id}/vehicles/{vehicle_id}
```
**Method:** GET

* The response should look like this

```json
{
    id: string;
    age: number;
    first_name: string;
    last_name: string;
    driver_license: string;
    vehicles: [
        {
            id: string;
            model: string;
            year: string;
        }
    ]
}
```
