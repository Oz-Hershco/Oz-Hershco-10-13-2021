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
      "EffectiveDate": "2021-10-18T08:00:00+03:00",
      "EffectiveEpochDate": 1634533200,
      "Severity": 5,
      "Text": "Expect showers Monday morning",
      "Category": "rain",
      "EndDate": "2021-10-18T14:00:00+03:00",
      "EndEpochDate": 1634554800,
      "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?unit=c&lang=en-us"
    },
    "DailyForecasts": [
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
            "Value": 24.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 26.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 27.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 6.7,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 7,
            "Unit": "C",
            "UnitType": 17
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
          "ShortPhrase": "Comfortable with some sun",
          "LongPhrase": "Comfortable with sun and some clouds",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 14.8,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 279,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 283,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 39,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 69.2,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false,
          "ShortPhrase": "Patchy clouds and very warm",
          "LongPhrase": "Patchy clouds and very warm",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 291,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 300,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 33,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
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
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=1&unit=c&lang=en-us"
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
            "Value": 24,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 21.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 27.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 21.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 24.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 7.1,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 7,
            "Unit": "C",
            "UnitType": 17
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
          "Icon": 14,
          "IconPhrase": "Partly sunny w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "A passing morning shower",
          "LongPhrase": "A brief morning shower; otherwise, partly sunny",
          "PrecipitationProbability": 55,
          "ThunderstormProbability": 11,
          "RainProbability": 55,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 294,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 291,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0.5,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0.5,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 36,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 78.6,
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
          "ShortPhrase": "Warm; a shower in places late",
          "LongPhrase": "Patchy clouds and very warm; a stray late-night shower",
          "PrecipitationProbability": 45,
          "ThunderstormProbability": 9,
          "RainProbability": 45,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 306,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 293,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0.6,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0.6,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0.5,
          "HoursOfRain": 0.5,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 48,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
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
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2021-10-19T07:00:00+03:00",
        "EpochDate": 1634616000,
        "Sun": {
          "Rise": "2021-10-19T06:47:00+03:00",
          "EpochRise": 1634615220,
          "Set": "2021-10-19T18:04:00+03:00",
          "EpochSet": 1634655840
        },
        "Moon": {
          "Rise": "2021-10-19T17:43:00+03:00",
          "EpochRise": 1634654580,
          "Set": "2021-10-20T06:22:00+03:00",
          "EpochSet": 1634700120,
          "Phase": "WaxingGibbous",
          "Age": 13
        },
        "Temperature": {
          "Minimum": {
            "Value": 24.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 27.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 24.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 7.6,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 7,
            "Unit": "C",
            "UnitType": 17
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
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Mostly sunny and pleasant",
          "LongPhrase": "Sunny to partly cloudy and pleasant",
          "PrecipitationProbability": 8,
          "ThunderstormProbability": 0,
          "RainProbability": 8,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 289,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 283,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 29,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 80.7,
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
          "PrecipitationProbability": 7,
          "ThunderstormProbability": 0,
          "RainProbability": 7,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 296,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 299,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 34,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
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
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2021-10-20T07:00:00+03:00",
        "EpochDate": 1634702400,
        "Sun": {
          "Rise": "2021-10-20T06:48:00+03:00",
          "EpochRise": 1634701680,
          "Set": "2021-10-20T18:03:00+03:00",
          "EpochSet": 1634742180
        },
        "Moon": {
          "Rise": "2021-10-20T18:11:00+03:00",
          "EpochRise": 1634742660,
          "Set": "2021-10-21T07:19:00+03:00",
          "EpochSet": 1634789940,
          "Phase": "Full",
          "Age": 14
        },
        "Temperature": {
          "Minimum": {
            "Value": 23,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 22,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 26.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 22,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 24,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 4.5,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 6,
            "Unit": "C",
            "UnitType": 17
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
            "Value": 4,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly sunny",
          "LongPhrase": "Partly sunny",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 293,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 22.2,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 287,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 55,
          "Evapotranspiration": {
            "Value": 0.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 53.5,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Mainly clear and warm",
          "LongPhrase": "Mainly clear and warm",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 291,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 319,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 21,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
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
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2021-10-21T07:00:00+03:00",
        "EpochDate": 1634788800,
        "Sun": {
          "Rise": "2021-10-21T06:48:00+03:00",
          "EpochRise": 1634788080,
          "Set": "2021-10-21T18:02:00+03:00",
          "EpochSet": 1634828520
        },
        "Moon": {
          "Rise": "2021-10-21T18:40:00+03:00",
          "EpochRise": 1634830800,
          "Set": "2021-10-22T08:15:00+03:00",
          "EpochSet": 1634879700,
          "Phase": "WaningGibbous",
          "Age": 15
        },
        "Temperature": {
          "Minimum": {
            "Value": 23.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 22.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 27.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 22.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 24.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 10,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 6,
            "Unit": "C",
            "UnitType": 17
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
            "Value": 4,
            "Category": "Moderate",
            "CategoryValue": 2
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Sunshine and pleasant",
          "LongPhrase": "Sunshine and pleasant",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 315,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 25.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 347,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 9,
          "Evapotranspiration": {
            "Value": 0.2,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 79.4,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Clear and warm",
          "LongPhrase": "Clear and warm",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 25,
              "Localized": "NNE",
              "English": "NNE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 356,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 2,
          "Evapotranspiration": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
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
        "MobileLink": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/ramat-gan/215849/daily-weather-forecast/215849?day=5&unit=c&lang=en-us"
      }
    ]
  };

  export { autoCompleteSearch, fiveDaysForcast, currentWeatherResponse}