import csv
import json

data = {}

with open('countries_air_quality_data.csv') as csv_file:
    reader = csv.reader(csv_file, delimiter=',')
    header = next(reader, None)

    for row in reader:
        data[row[0]] = {
            header[1]: float(row[1]),
            header[2]: float(row[2]),
            header[3]: float(row[3]),
            header[4]: float(row[4]),
        }

min_coefficient = data[min(data.keys(), key=(lambda k: data[k]['coefficient']))]['coefficient']
max_coefficient = data[max(data.keys(), key=(lambda k: data[k]['coefficient']))]['coefficient']
min_coefficient_gdp = data[min(data.keys(), key=(lambda k: data[k]['coefficient_gdp']))]['coefficient']
max_coefficient_gdp = data[max(data.keys(), key=(lambda k: data[k]['coefficient_gdp']))]['coefficient']

# Add color based on normalized coefficient
for key in data:
    normalized_color = int(abs(data[key]['coefficient']/(max_coefficient - min_coefficient)) * 255)
    data[key]['coefficientColor'] = 'rgb(0, {}, 0)'.format(normalized_color)

    normalized_color_gdp = int(abs(data[key]['coefficient_gdp'] / (max_coefficient_gdp - min_coefficient_gdp)) * 255)
    data[key]['coefficientGdpColor'] = 'rgb(0, {}, 0)'.format(normalized_color_gdp)

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
