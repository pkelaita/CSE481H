import numpy as np

from constants import HENRY_AG, PERSONALIZATION, LOCATIONS, TOPICS


def get_locs(options):
    matches = [
        loc for loc in LOCATIONS
        if len(
            set([TOPICS[i] for i in range(len(TOPICS)) if options[i]])
            .intersection(set(PERSONALIZATION['mapping'][loc])))
    ]

    if len(matches) >= 2:
        midpoints = np.random.choice(matches, 2, replace=False)
    elif len(matches) == 1:
        midpoints = np.random.choice(
            matches + [np.random.choice(list(set(LOCATIONS) - set(matches)))],
            2, replace=False
        )
    else:
        midpoints = np.random.choice(LOCATIONS, 2, replace=False)

    if midpoints[0] == HENRY_AG:
        midpoints = reversed(midpoints)

    midpoints = [LOCATIONS.index(e) + 1 for e in midpoints]    
    return [0] + midpoints + [7]
