import csv
import json

data = {}
coefficients = []

with open('countries_air_quality_data.csv') as csv_file:
    reader = csv.reader(csv_file, delimiter=',')
    header = next(reader, None)
    for row in reader:
        coefficients.append(float(row[1]))

        data[row[0]] = {
            header[1]: float(row[1]),
            header[2]: float(row[2]),
        }

min_coefficient = min(coefficients)
max_coefficient = max(coefficients)

# Add color based on normalized coefficient
for key in data:
    normalized_color = int(abs(data[key]['coefficient']/(max_coefficient - min_coefficient)) * 255)
    data[key]['coefficientColor'] = 'rgb(0, {}, 0)'.format(normalized_color)

with open('countries.geojson') as geo_json_file, open('production.geo.json', 'w') as production:
    geo_json = json.load(geo_json_file)

    countries_with_data = {
        "type": "FeatureCollection",
        "features": []
    }

    for feature in geo_json["features"]:
        country_code = feature['properties']["ISO_A3"]

        if country_code in data:
            feature['properties'].update(data[country_code])
            countries_with_data["features"].append(feature)

    production.write(json.dumps(countries_with_data))
