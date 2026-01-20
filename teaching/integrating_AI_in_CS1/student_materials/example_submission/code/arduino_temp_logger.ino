/*AI GENERATED CODE USED FOR EXAMPLE
  Temperature Monitor and Logger for Arduino Uno

  This sketch reads temperature and humidity from a DHT11 sensor
  and prints the readings to the Arduino Serial Monitor.

  Hardware Setup:
  - Arduino Uno
  - DHT11 Sensor
  - Connect Arduino's 5V to DHT11's VCC (+)
  - Connect Arduino's GND to DHT11's GND (-)
  - Connect Arduino's Pin 2 to DHT11's DATA (out)

  Required Library:
  - You must install the "DHT sensor library" by Adafruit from the
    Arduino Library Manager before compiling this sketch.
  - Go to Sketch > Include Library > Manage Libraries... and search for "DHT".
*/

// 1. Include the DHT library
#include "DHT.h"

// 2. --- Configuration ---
// Define the digital pin the DHT11 data pin is connected to.
#define DHTPIN 2

// Define the type of DHT sensor you are using (DHT11, DHT22, etc.).
#define DHTTYPE DHT11

// Define the delay between sensor readings, in milliseconds.
const int READ_INTERVAL_MS = 5000; // 5 seconds

// 3. --- Initialization ---
// Initialize the DHT sensor object.
// We pass the pin number and sensor type to the DHT constructor.
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // Start the serial communication at 9600 bits per second.
  // This is the standard speed for the Serial Monitor.
  Serial.begin(9600);
  Serial.println("DHT11 Temperature and Humidity Logger");

  // Initialize the sensor.
  dht.begin();

  Serial.println("Sensor initialized. Starting readings...");
}

// 4. --- Main Loop ---
// The loop() function runs over and over again forever.
void loop() {
  // Wait for the defined interval before the next reading.
  // delay() pauses the program for the given number of milliseconds.
  delay(READ_INTERVAL_MS);

  // Reading temperature or humidity takes about 250 milliseconds.
  // Sensor readings may also be up to 2 seconds old (it's a slow sensor).

  // Read Humidity.
  // The readHumidity() function returns a float.
  float h = dht.readHumidity();

  // Read temperature as Celsius (the default).
  // The readTemperature() function returns a float.
  float t = dht.readTemperature();

  // Check if any reads failed and exit early (to try again).
  // isnan() is a function that checks if a value is "Not a Number".
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor! Check wiring.");
    return; // Exit the loop() function and try again on the next iteration.
  }

  // If readings were successful, print them to the Serial Monitor.
  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print("%  Temperature: ");
  Serial.print(t);
  Serial.println("°C");
}
