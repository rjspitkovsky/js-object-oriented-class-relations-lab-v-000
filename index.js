let store = {drivers: [], passengers: [], trips: []}

let driverId = 0 

class Driver {
  constructor(name) {
    this.name = name 
    this.id = ++driverId
  }
  trips() {
    store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
}