var autoCompleteSearch = [
  {
    "Version": 1,
    "Key": "212473",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Petah Tiqwa",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "M",
      "LocalizedName": "Central District"
    }
  },
  {
    "Version": 1,
    "Key": "2015764",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "Petahunan",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JI",
      "LocalizedName": "East Java"
    }
  },
  {
    "Version": 1,
    "Key": "3461933",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "Petahunan",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JI",
      "LocalizedName": "East Java"
    }
  },
  {
    "Version": 1,
    "Key": "3454686",
    "Type": "City",
    "Rank": 85,
    "LocalizedName": "Petahunan",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JT",
      "LocalizedName": "Central Java"
    }
  }
];

var currentWeatherResponse = [
    {
      "LocalObservationDateTime": "2021-10-14T11:50:00+03:00",
      "EpochTime": 1634201400,
      "WeatherText": "Sunny",
      "WeatherIcon": 1,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 25.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 25.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 23.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 75,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RelativeHumidity": 53,
      "IndoorRelativeHumidity": 53,
      "DewPoint": {
        "Metric": {
          "Value": 15.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 0,
          "Localized": "N",
          "English": "N"
        },
        "Speed": {
          "Metric": {
            "Value": 22,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 13.7,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 27,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 16.8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 4,
      "UVIndexText": "Moderate",
      "Visibility": {
        "Metric": {
          "Value": 16.1,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 10,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 0,
      "Ceiling": {
        "Metric": {
          "Value": 12192,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 40000,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1014,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 29.94,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Falling",
        "Code": "F"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": 1.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 3,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 26.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 80,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 26.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 19.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 66,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 20.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 69,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 28.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 84,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 20.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 69,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 28.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 84,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 20.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 69,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 31.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 89,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/current-weather/215849?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/current-weather/215849?lang=en-us"
    }
  ];

  var fiveDaysForcast = {
    "Headline": {
      "EffectiveDate": "2021-10-16T08:00:00+03:00",
      "EffectiveEpochDate": 1634360400,
      "Severity": 4,
      "Text": "Pleasant this weekend",
      "Category": "mild",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2021-10-14T07:00:00+03:00",
        "EpochDate": 1634184000,
        "Sun": {
          "Rise": "2021-10-14T06:43:00+03:00",
          "EpochRise": 1634182980,
          "Set": "2021-10-14T18:10:00+03:00",
          "EpochSet": 1634224200
        },
        "Moon": {
          "Rise": "2021-10-14T14:59:00+03:00",
          "EpochRise": 1634212740,
          "Set": "2021-10-15T01:23:00+03:00",
          "EpochSet": 1634250180,
          "Phase": "WaxingGibbous",
          "Age": 8
        },
        "Temperature": {
          "Minimum": {
            "Value": 77,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 85,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 82,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "HoursOfSun": 11,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 16,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 5,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Nice with sunshine",
          "LongPhrase": "Nice with sunshine",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 10.4,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 1,
              "Localized": "N",
              "English": "N"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 19.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 358,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 4,
          "Evapotranspiration": {
            "Value": 0.19,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 99.7,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Clear and very warm",
          "LongPhrase": "Clear and very warm",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 8.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 13,
              "Localized": "NNE",
              "English": "NNE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 17.3,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 4,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 0,
          "Evapotranspiration": {
            "Value": 0.05,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=1&lang=en-us"
      },
      {
        "Date": "2021-10-15T07:00:00+03:00",
        "EpochDate": 1634270400,
        "Sun": {
          "Rise": "2021-10-15T06:44:00+03:00",
          "EpochRise": 1634269440,
          "Set": "2021-10-15T18:09:00+03:00",
          "EpochSet": 1634310540
        },
        "Moon": {
          "Rise": "2021-10-15T15:40:00+03:00",
          "EpochRise": 1634301600,
          "Set": "2021-10-16T02:27:00+03:00",
          "EpochSet": 1634340420,
          "Phase": "WaxingGibbous",
          "Age": 9
        },
        "Temperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 83,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 73,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 86,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 73,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "HoursOfSun": 10.5,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 14,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 5,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Sunshine and delightful",
          "LongPhrase": "Sunshine and delightful",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.2,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 359,
              "Localized": "N",
              "English": "N"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 16.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 352,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 1,
          "Evapotranspiration": {
            "Value": 0.17,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 100,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false,
          "ShortPhrase": "Becoming cloudy and warm",
          "LongPhrase": "Becoming cloudy and warm",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 46,
              "Localized": "NE",
              "English": "NE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 13.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 4,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 61,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=2&lang=en-us"
      },
      {
        "Date": "2021-10-16T07:00:00+03:00",
        "EpochDate": 1634356800,
        "Sun": {
          "Rise": "2021-10-16T06:45:00+03:00",
          "EpochRise": 1634355900,
          "Set": "2021-10-16T18:08:00+03:00",
          "EpochSet": 1634396880
        },
        "Moon": {
          "Rise": "2021-10-16T16:15:00+03:00",
          "EpochRise": 1634390100,
          "Set": "2021-10-17T03:29:00+03:00",
          "EpochSet": 1634430540,
          "Phase": "WaxingGibbous",
          "Age": 10
        },
        "Temperature": {
          "Minimum": {
            "Value": 78,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "HoursOfSun": 7.1,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 15,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 5,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly sunny and comfortable",
          "LongPhrase": "Comfortable with sun and some clouds",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 6.9,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 315,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 13.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 2,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 43,
          "Evapotranspiration": {
            "Value": 0.14,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 78,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly cloudy and very warm",
          "LongPhrase": "Partly cloudy and very warm",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 331,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 12.7,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 5,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 71,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=3&lang=en-us"
      },
      {
        "Date": "2021-10-17T07:00:00+03:00",
        "EpochDate": 1634443200,
        "Sun": {
          "Rise": "2021-10-17T06:45:00+03:00",
          "EpochRise": 1634442300,
          "Set": "2021-10-17T18:07:00+03:00",
          "EpochSet": 1634483220
        },
        "Moon": {
          "Rise": "2021-10-17T16:47:00+03:00",
          "EpochRise": 1634478420,
          "Set": "2021-10-18T04:28:00+03:00",
          "EpochSet": 1634520480,
          "Phase": "WaxingGibbous",
          "Age": 11
        },
        "Temperature": {
          "Minimum": {
            "Value": 77,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 78,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "HoursOfSun": 2.6,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 14,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 2,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Comfortable with some sun",
          "LongPhrase": "Comfortable with sun and some clouds",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.2,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 290,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 16.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 289,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 72,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 39.2,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Mainly clear and very warm",
          "LongPhrase": "Clear to partly cloudy and very warm",
          "PrecipitationProbability": 1,
          "ThunderstormProbability": 0,
          "RainProbability": 1,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 297,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 13.8,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 297,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 14,
          "Evapotranspiration": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=4&lang=en-us"
      },
      {
        "Date": "2021-10-18T07:00:00+03:00",
        "EpochDate": 1634529600,
        "Sun": {
          "Rise": "2021-10-18T06:46:00+03:00",
          "EpochRise": 1634528760,
          "Set": "2021-10-18T18:05:00+03:00",
          "EpochSet": 1634569500
        },
        "Moon": {
          "Rise": "2021-10-18T17:16:00+03:00",
          "EpochRise": 1634566560,
          "Set": "2021-10-19T05:26:00+03:00",
          "EpochSet": 1634610360,
          "Phase": "WaxingGibbous",
          "Age": 12
        },
        "Temperature": {
          "Minimum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 71,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 82,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 71,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "HoursOfSun": 7.9,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "F",
            "UnitType": 18
          },
          "Cooling": {
            "Value": 12,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 5,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly sunny and comfortable",
          "LongPhrase": "Partly sunny and comfortable",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 8.1,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 292,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 15,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 297,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 31,
          "Evapotranspiration": {
            "Value": 0.14,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 77,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 39,
          "IconPhrase": "Partly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Warm with a few showers",
          "LongPhrase": "Patchy clouds and very warm with a couple of showers around, mainly late",
          "PrecipitationProbability": 65,
          "ThunderstormProbability": 13,
          "RainProbability": 65,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 4.6,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 298,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 10.4,
              "Unit": "mi/h",
              "UnitType": 9
            },
            "Direction": {
              "Degrees": 321,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0.09,
            "Unit": "in",
            "UnitType": 1
          },
          "Rain": {
            "Value": 0.09,
            "Unit": "in",
            "UnitType": 1
          },
          "Snow": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "Ice": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          },
          "HoursOfPrecipitation": 1.5,
          "HoursOfRain": 1.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 41,
          "Evapotranspiration": {
            "Value": 0.03,
            "Unit": "in",
            "UnitType": 1
          },
          "SolarIrradiance": {
            "Value": 0,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=5&lang=en-us"
      }
    ]
  };

  export { autoCompleteSearch}