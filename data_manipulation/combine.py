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
    data[key]['fillColor'] = 'rgb(0, {}, 0)'.format(normalized_color)

with open('countries.json') as geo_json_file, open('production.geo.json', 'w') as production:
    geo_json = {}

    for row in geo_json_file:
        geo_json = json.loads(row)
        break

    for i, row in enumerate(geo_json["features"]):
        country_code = row['properties']["sov_a3"]
        if country_code in data:
            row['properties'].update(data[country_code])

    production.write(json.dumps(geo_json))
