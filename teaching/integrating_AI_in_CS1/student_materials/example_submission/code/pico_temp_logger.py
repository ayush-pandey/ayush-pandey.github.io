# AI GENERATED CODE USED FOR EXAMPLE
# Temperature Monitor and Logger for Raspberry Pi Pico
#
# This script reads temperature and humidity from a DHT11 sensor
# and prints the readings to the serial output (REPL).
#
# Hardware Setup:
# - Raspberry Pi Pico
# - DHT11 Sensor
# - Connect Pico's 3.3V(OUT) to DHT11's VCC (+)
# - Connect Pico's GND to DHT11's GND (-)
# - Connect Pico's GP15 to DHT11's DATA (out)

# Import the required libraries
import machine
import utime
import dht

# --- Configuration ---
# Define the GPIO pin the DHT11 data pin is connected to.
# We are using Pin 15, but you can change this to any other valid GPIO pin.
SENSOR_PIN = 15

# Define the delay between sensor readings, in seconds.
READ_INTERVAL_S = 5

# --- Initialization ---
# Initialize the DHT11 sensor object.
# We pass the pin number to the DHT11 constructor.
try:
    sensor = dht.DHT11(machine.Pin(SENSOR_PIN))
    print("DHT11 sensor initialized successfully.")
except Exception as e:
    print(f"Error initializing sensor: {e}")
    # We stop the script if the sensor can't be initialized.
    # This could be due to a wiring issue or a faulty sensor.
    raise SystemExit

# --- Main Loop ---
# The main loop of the program runs forever.
print("Starting temperature and humidity readings...")
print("Press Ctrl+C to stop the program.")

while True:
    try:
        # Trigger a sensor reading.
        # This function can sometimes fail if the sensor is not ready,
        # so we put it in a try...except block.
        sensor.measure()

        # Get the temperature and humidity values.
        # .temperature() returns the temperature in Celsius.
        # .humidity() returns the relative humidity in percent.
        temp_c = sensor.temperature()
        hum = sensor.humidity()

        # Print the readings in a formatted string.
        # The '%.1f' formats the number to one decimal place.
        print(f"Temperature: {temp_c:.1f}°C, Humidity: {hum:.1f}%")

    except OSError as e:
        # This error often occurs if the sensor is read too frequently
        # or if there's a connection issue.
        print(f"Failed to read sensor. Check connection. Error: {e}")
    except Exception as e:
        # Catch any other unexpected errors.
        print(f"An unexpected error occurred: {e}")

    # Wait for the defined interval before the next reading.
    # utime.sleep() pauses the program for the given number of seconds.
    utime.sleep(READ_INTERVAL_S)
