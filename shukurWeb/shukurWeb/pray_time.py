import requests

# URL for the API
api_url = "https://namaztimes.kz/api/praytimes"

# Parameters for the API call
params = {
    "id": 8408,  # Replace with the desired location ID
    "type": "json"  # Request data in JSON format
}

# Making a GET request to the API
response = requests.get(api_url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response JSON
    pray_times = response.json()
    print(pray_times)
else:
    print(f"Error: Unable to fetch data (Status code: {response.status_code})")
