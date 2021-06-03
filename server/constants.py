
# Locations
RED_SQUARE = 'Red Square'
COMM_BLDG = 'Communication Building'
HUB = 'Husky Union Building'
ROBERTS_HALL = 'Roberts Hall'
UW_MG = 'UW Medicinal Herb Garden'
LIFE_SCI = 'Life Sciences'
HENRY_AG = 'Henry Art Gallery'
LAW_LIB = 'Gallagher Law Library'

# Topics
CARBON = 'Carbon emissions'
COMPOST = 'Composting'
MICRO = 'Microplastics'
GARDENING = 'Gardening'
CLIMATE = 'Climate change'
ENVIRO = 'Environmental effects of art'
WASTE = 'Material waste'
HOBBIES = 'Personal Hobbies'


PERSONALIZATION = {
    'mapping': {
        COMM_BLDG: [CARBON, WASTE],
        HUB: [COMPOST],
        UW_MG: [COMPOST, GARDENING],
        ROBERTS_HALL: [MICRO, WASTE],
        LIFE_SCI: [CLIMATE],
        HENRY_AG: [ENVIRO, HOBBIES],
    },
    # 'required': [RED_SQUARE, COMM_BLDG, HUB, HENRY_AG]
}

# Only the midpoints, doesn't include red square or law lib
LOCATIONS = [COMM_BLDG, HUB, ROBERTS_HALL, UW_MG, LIFE_SCI, HENRY_AG]
TOPICS = [CARBON, COMPOST, MICRO, GARDENING, CLIMATE, ENVIRO, WASTE, HOBBIES]
