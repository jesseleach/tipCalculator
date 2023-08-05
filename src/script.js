const tipCalculator = (service, cost) => {
    if (service === 'excellent') {
      return cost * .30
      } else if (service === 'good') {
      return cost * .20
      } else if (service === 'ok') {
      return cost * .10
      } else if (service === 'bad') {
      return cost * .05
      } else {
      return cost * .08
      }
  };