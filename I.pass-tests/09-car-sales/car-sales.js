function sale(carSold){

    let totals = {
        Ford: 0,
        Honda: 0,
        "Land Rover": 0,
        Toyota: 0
      };

    carSold.forEach( (element) => {
        switch (element.make) {
            case 'Ford':
                totals.Ford += element.price;
                break;
            case 'Honda':
                totals.Honda += element.price;
                break;
            case 'Toyota':
                totals['Toyota'] += element.price;
                break;
            case "Land Rover":
                totals["Land Rover"] += element.price;
                break;
            default:
                break;
        }
    })

    return totals;
}

module.exports = sale;
