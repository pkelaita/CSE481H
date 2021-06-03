from constants import PERSONALIZATION, LOCATIONS, TOPICS

def get_locs(options):

    return [
        bool(len(
            set([TOPICS[i] for i in range(len(TOPICS)) if options[i]])
            .intersection(set(PERSONALIZATION['mapping'][loc]))
        )) for loc in LOCATIONS
    ]


def test():
    opt = [False, True, True, False, True, True, False, True, True, False]
    print(get_locs(opt))


if __name__ == '__main__':
    test()
