
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
WILDLIFE = 'Wildlife'
CARBON = 'Carbon emissions'
COMPOST = 'Composting'
MICRO = 'Microplastics'
GARDENING = 'Gardening'
CLIMATE = 'Climate change'
ENVIRO = 'Environmental effects of art'
REDUCING = 'Reducing consumption'
WASTE = 'Material waste'
HOBBIES = 'Personal Hobbies'


PERSONALIZATION = {
    'mapping': {
        RED_SQUARE: [WILDLIFE],
        COMM_BLDG: [CARBON, WASTE],
        HUB: [COMPOST],
        UW_MG: [COMPOST, GARDENING],
        ROBERTS_HALL: [MICRO, WASTE],
        LIFE_SCI: [CLIMATE],
        HENRY_AG: [ENVIRO, HOBBIES],
        LAW_LIB: [REDUCING, HOBBIES],
    },
    # 'required': [RED_SQUARE, COMM_BLDG, HUB, HENRY_AG]
}

LOCATIONS = [RED_SQUARE, COMM_BLDG, HUB,
             ROBERTS_HALL, UW_MG, LIFE_SCI, HENRY_AG, LAW_LIB]

TOPICS = [WILDLIFE, CARBON, COMPOST, MICRO, GARDENING,
          CLIMATE, ENVIRO, REDUCING, WASTE, HOBBIES]
