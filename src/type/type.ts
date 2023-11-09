export interface TypeUserClick {
  stNm: {
    _text: string;
  };
  stationNm: {
    _text: string;
  };
}
export interface TypeClickValue {
  routeType: {
    _text: string;
  };
  busRouteNm: {
    _text: string;
  };
  stStationNm: {
    _text: string;
  };
  edStationNm: {
    _text: string;
  };
  busRouteId: {
    _text: string;
  };
}

export interface TpyestationArrive {
  ServiceResult: {
    msgHeader: {
      headerMsg: {
        _text: string;
      };
    };
    msgBody: {
      itemList: {
        busType1: {
          _text: string;
        };
        busType2: {
          _text: string;
        };
        arrmsg1: {
          _text: string;
        };
        arrmsg2: {
          _text: string;
        };
        busRouteAbrv: {
          _text: string;
        };
      };
    };
  };
}
export interface TypeLocationList {
  gpsX: {
    _text: string;
  };
  gpsY: {
    _text: string;
  };
  station: {
    _text: string;
  };
  stationNm: {
    _text: string;
  };
  arsId: {
    _text: string;
  };
  direction: {
    _text: string;
  };
}

export interface Location {
  lat: number;
  lng: number;
}

export interface TypebusStationList {
  list: {
    gpsX: {
      _text: string;
    };
    gpsY: {
      _text: string;
    };
    station: {
      _text: string;
    };
    stationNm: {
      _text: string;
    };
    arsId: {
      _text: string;
    };
    direction: {
      _text: string;
    };
  };
}
export interface TypebusStation {
  ServiceResult?: {
    msgHeader?: {
      headerMsg: {
        _text: string;
      };
    };
    msgBody?: {
      itemList?: [
        {
          gpsX: {
            _text: string;
          };
          gpsY: {
            _text: string;
          };
          station: {
            _text: string;
          };
          stationNm: {
            _text: string;
          };
          arsId: {
            _text: string;
          };
          direction: {
            _text: string;
          };
        }
      ];
    };
  };
}

export interface TypeStaitionList {
  stNm: {
    _text: string;
  };
  stId: {
    _text: string;
  };
  arsId: {
    _text: string;
  };
  busRouteNm: {
    _text: string;
  };
  stStationNm: {
    _text: string;
  };
  edStationNm: {
    _text: string;
  };
  corpNm: {
    _text: string;
  };
  term: {
    _text: string;
  };
  firstBusTm: {
    _text: string;
  };
  lastBusTm: {
    _text: string;
  };
  tmY: {
    _text: string;
  };
  tmX: {
    _text: string;
  };
}
export interface TypeStation {
  ServiceResult: {
    msgHeader: {
      headerMsg: {
        _text: string;
      };
    };
    msgBody: {
      itemList: {
        length: number;
        tmY: {
          _text: string;
        };
        stId: {
          _text: string;
        };
        tmX: {
          _text: string;
        };
        stNm: {
          _text: string;
        };
        arsId: {
          _text: string;
        };
        busRouteNm: {
          _text: string;
        };
        stStationNm: {
          _text: string;
        };
        edStationNm: {
          _text: string;
        };
        corpNm: {
          _text: string;
        };
        term: {
          _text: string;
        };
        firstBusTm: {
          _text: string;
        };
        lastBusTm: {
          _text: string;
        };
      };
    };
  };
}
export interface TypeCurrentItem {
  busRouteId: {
    _text: string;
  };
  routeType: {
    _text: string;
  };
  busRouteNm: {
    _text: string;
  };
  stStationNm: {
    _text: string;
  };
  edStationNm: {
    _text: string;
  };
  corpNm: {
    _text: string;
  };
  term: {
    _text: string;
  };
  firstBusTm: {
    _text: string;
  };
  lastBusTm: {
    _text: string;
  };
}

export interface TypeBusNum {
  ServiceResult: {
    msgHeader: {
      headerMsg: {
        _text: string;
      };
    };
    msgBody: {
      itemList: {
        length: number;
        routeType: {
          _text: string;
        };
        busRouteId: {
          _text: string;
        };
        busRouteNm: {
          _text: string;
        };
        stStationNm: {
          _text: string;
        };
        edStationNm: {
          _text: string;
        };
        corpNm: {
          _text: string;
        };
        term: {
          _text: string;
        };
        firstBusTm: {
          _text: string;
        };
        lastBusTm: {
          _text: string;
        };
      };
    };
  };
}
