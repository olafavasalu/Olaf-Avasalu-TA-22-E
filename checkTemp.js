function checkTemp(temp) {
    if(temp < 21) {
      return -1;
    } else if(temp < 41) {
      return 0;
    } else {
      return 1;
    }
  }
