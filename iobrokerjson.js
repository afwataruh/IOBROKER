
json='{"Time":"2019-12-07T20:29:09","ANALOG":{"A0":1024},"DHT11":{"Temperature":22.6,"Humidity":41.0},"TempUnit":"C"}'

inhalt = JSON.parse(json);


console.log("print data structure")
console.log(inhalt)

var a = inhalt.Time;
var b = inhalt.ANALOG.A0;
var c = inhalt.DHT11.Temperature;
var d = inhalt.DHT11.Humidity;

console.log("-------")

console.log("print single values")

console.log("Time = " + a);
console.log("A0 = " + b);
console.log("Temperature = " + c);
console.log("Humidity = " + d);
