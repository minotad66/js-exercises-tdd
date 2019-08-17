function format(capitals, transform){
    return capitalFormated = capitals.map( (element) => transform(element.city, element.country) );
}

module.exports = format;
