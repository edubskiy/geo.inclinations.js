/**
 * Simple yet powerful City inclination (Russian only) with genitive
 * inclination by default
 * You can use your own exclusion list, just copy and past in the 'exclusions' key for needed inclinations
 * or all of them
 *
 * Note: This is BETA version only!!! Possible bugs may occur :(
 *
 * @author Evgeniy Dubskiy
 * @email e.dubskiy@gmail.com
 * @example:
 * GEO.city.incline('Москва') // -> Москвы
 * GEO.city.incline('Санкт-Петербург', 'dative') // -> Санкт-Петербурге
 */
(function(exports, undefined) {
    var GEO = exports.GEO || {};
    GEO.city = {
        inclineTypes: {
            "data_types": {
                "genitive": {
                    "all": "Всех городов",
                    "compound": [
                        "-на-",
                        "ск"
                    ],
                    "exclusions": [
                        "Нерюнгри",
                        "Туапсе",
                        [
                            "Воды",
                            "Вод"
                        ],
                        [
                            "Елец",
                            "Ельца"
                        ],
                        "Шали",
                        [
                            "Луки",
                            "Лук"
                        ],
                        [
                            "Камень",
                            "Камня"
                        ],
                        [
                            "Электросталь",
                            "Электростали"
                        ],
                        [
                            "Усолье",
                            "Усолья"
                        ],
                        [
                            "Серги",
                            "Серг"
                        ],
                        "Тольятти",
                        "Сале",
                        "Лабытнанги",
                        "Туапсе",
                        [
                            "Уренгой",
                            "Уренгоя"
                        ],
                        [
                            "Торжок",
                            "Торжка"
                        ],
                        [
                            "Починок",
                            "Починка"
                        ],
                        [
                            "Хилок",
                            "Хилка"
                        ],
                        "Хельсинки",
                        "Дели",
                        [
                            "Ханой",
                            "Ханоя"
                        ]
                    ],
                    "-3": "ка",
                    "-1": {
                        "й": {
                            "и": {
                                "ч": "его",
                                "by_default": "ого"
                            },
                            "о": "ого",
                            "a": "е",
                            "by_default": "я"
                        },
                        "e": {
                            "и": "их",
                            "ы": "ых",
                            "о": "ого",
                            "щ": "а",
                            "р": "е",
                            "by_default": "я"
                        },
                        "я": {
                            "a": "ой",
                            "я": "ей",
                            "by_default": "и"
                        },
                        "и": {
                            "a": false,
                            "к": {
                                "и": "ок",
                                "by_default": "ов"
                            },
                            "ш": "ей",
                            "з": "ей",
                            "by_default": "ей"
                        },
                        "а": {
                            "ш": "и",
                            "by_default": "ы"
                        },
                        "ь": {
                            "л": "я",
                            "by_default": "и"
                        },
                        "ц": {
                            "и": "ца"
                        },
                        "ы": {
                            "ц": "ов"
                        },
                        "л": {
                            "е": "ле"
                        },
                        ")": false
                    },
                    "by_default": "а"
                },
                "dative": {
                    "all": "Всех городах",
                    "compound": [
                        "-на-",
                        "ск"
                    ],
                    "exclusions": [
                        "Нерюнгри",
                        "Туапсе",
                        [
                            "Воды",
                            "Вод"
                        ],
                        [
                            "Елец",
                            "Ельце"
                        ],
                        "Шали",
                        [
                            "Луки",
                            "Лук"
                        ],
                        [
                            "Камень",
                            "Камне"
                        ],
                        [
                            "Электросталь",
                            "Электростали"
                        ],
                        [
                            "Усолье",
                            "Усолье"
                        ],
                        [
                            "Серги",
                            "Серг"
                        ],
                        "Тольятти",
                        "Сале",
                        "Лабытнанги",
                        "Туапсе",
                        [
                            "Уренгой",
                            "Уренгое"
                        ],
                        [
                            "Торжок",
                            "Торжке"
                        ],
                        [
                            "Починок",
                            "Починке"
                        ],
                        [
                            "Хилок",
                            "Хилке"
                        ],
                        "Хельсинки",
                        "Дели",
                        [
                            "Ханой",
                            "Ханое"
                        ]
                    ],
                    "-3": "ке",
                    "-1": {
                        "й": {
                            "и": {
                                "ч": "ем",
                                "by_default": "ом"
                            },
                            "о": "е",
                            "a": "я",
                            "by_default": "е"
                        },
                        "e": {
                            "и": "им",
                            "ы": "ым",
                            "о": "ем",
                            "щ": "е",
                            "р": "е",
                            "by_default": "ее"
                        },
                        "я": {
                            "a": "ой",
                            "я": "ей",
                            "by_default": "е"
                        },
                        "и": {
                            "a": false,
                            "к": {
                                "и": "ок",
                                "by_default": "ов"
                            },
                            "ш": "е",
                            "з": "е",
                            "by_default": "ей"
                        },
                        "а": {
                            "ш": "и",
                            "by_default": "е"
                        },
                        "ь": {
                            "л": "е",
                            "by_default": "е"
                        },
                        "ц": {
                            "и": "це"
                        },
                        "ы": {
                            "ц": "ах"
                        },
                        "л": {
                            "е": "ле"
                        },
                        ")": false
                    },
                    "by_default": "е"
                }
            },
            "available_types": [
                "dative",
                "genitive"
            ],
            "default_type": "genitive"
        },
        incline: function(cityName, inclineType) {
            //подбираем окончания только для русской локали и
            //для названий городов оканчивающихся на русскую букву
            if (!/^[а-яё]$/i.test(cityName.substr(-1))) {
                return cityName;
            }

            var inclineTypes = GEO.city.inclineTypes.data_types,
            // По умолчанию родительный падеж
                thisInclineType = (inclineType && inclineTypes[inclineType]) || inclineTypes['genitive'],
                thisInclineSubstrWith1 = thisInclineType['-1'],
                strSubstrWith2 = cityName.substr(0, cityName.length - 2),
                strSubstrWith1 = cityName.substr(0, cityName.length - 1),
                s;

            //составные названия
            if (cityName.indexOf("-") + 1) {
                if (s = /(.*?)(\-на\-.*)/gi.exec(cityName)) {
                    return arguments.callee(s[1]) + s[2];
                }
                if (s = /(.*?)\-(.*)/gi.exec(cityName)) {
                    if (s[1].indexOf(inclineTypes.compound) == s[1].length - 2) {
                        s[1] = arguments.callee(s[1]);
                    }
                    return s[1] + "-" + arguments.callee(s[2]);
                }
            }

            if (cityName.indexOf(" ") + 1) {
                if (s = /(.*?)\s(.*)/gi.exec(cityName)) {
                    return arguments.callee(s[1]) + " " + arguments.callee(s[2]);
                }
            }
            //исключения:
            var excludes = thisInclineType.exclusions;
            for (var i = 0; i < excludes.length; i++ ) {
                if (typeof excludes[i] == "string") {
                    if (cityName == excludes[i]) {
                        return cityName;
                    }
                } else {
                    if (cityName == excludes[i][0]) {
                        return excludes[i][1];
                    }
                }
            }

            //окончания
            switch (cityName.substr(-3)) {
                case "чек":
                case "чёк":
                    return strSubstrWith2 + thisInclineType['-3'];
            }

            switch (cityName.substr(-1)) {
                case "й":
                    switch (cityName.substr(-2,1)) {
                        case "и":
                            switch (cityName.substr(-3,1)) {
                                case "н":
                                case "ч":
                                    return strSubstrWith2 + thisInclineSubstrWith1['й']['и']['ч'];
                                default:
                                    return strSubstrWith2 + thisInclineSubstrWith1['й']['и'].by_default;
                            }
                        case "ы":
                        case "о":
                            return strSubstrWith2 + thisInclineSubstrWith1['й']['о'];
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['й'].by_default;
                case "е":
                    switch (cityName.substr(-2,1)) {
                        case "и":
                            return strSubstrWith2 + thisInclineSubstrWith1['е']['и'];
                        case "ы":
                            return strSubstrWith2 + thisInclineSubstrWith1['е']['ы'];
                        case "о":
                            return strSubstrWith2 + thisInclineSubstrWith1['е']['о'];
                        case "щ":
                            return strSubstrWith1 + thisInclineSubstrWith1['е']['щ'];
                        case "р":
                            return strSubstrWith1 + thisInclineSubstrWith1['е']['р'];
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['е'].by_default;
                case "я":
                    switch (cityName.substr(-2,1)) {
                        case "а":
                            return strSubstrWith2 + thisInclineSubstrWith1['я']['а'];
                        case "я":
                            return strSubstrWith2 + thisInclineSubstrWith1['я']['я'];
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['я'].by_default;
                case "и":
                    switch (cityName.substr(-2,1)) {
                        case "а":
                            return cityName;
                        case "к":
                            switch (cityName.substr(-4,1)) {
                                case "и":
                                    return strSubstrWith2 + thisInclineSubstrWith1['и']['к']['и'];
                            }
                            return strSubstrWith1 + thisInclineSubstrWith1['и']['к'].by_default;
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['и'].by_default;
                case "а":
                    switch (cityName.substr(-2,1)) {
                        case "к":
                        case "г":
                        case "ж":
                        case "ш":
                            return strSubstrWith1 + thisInclineSubstrWith1['а']['ш'];
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['а'].by_default;
                case "ь":
                    switch (cityName.substr(-2,1)) {
                        case "л":
                            return strSubstrWith1 + thisInclineSubstrWith1['ь']['л'];
                    }
                    return strSubstrWith1 + thisInclineSubstrWith1['ь'].by_default;
                case "ц":
                    switch (cityName.substr(-2,1)) {
                        case "е":
                        case "и":
                            return strSubstrWith2 + thisInclineSubstrWith1['ц']['и'];
                    }
                case "ы":
                    switch (cityName.substr(-2,1)) {
                        case "ц":
                            return strSubstrWith1 + thisInclineSubstrWith1['ы']['ц'];
                    }
                case "у":
                case "э":
                case "о":
                case ")":
                    return cityName;
            }

            return cityName + thisInclineType.by_default;
        }
    };

    exports.GEO.city = GEO.city;

}(this));