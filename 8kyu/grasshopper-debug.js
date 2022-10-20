const weatherInfo = temp => {
    const c = convertToCelsius(temp);
    return c < 0 ? (c + " is freezing temperature") : (c + " is above freezing temperature");
}

const convertToCelsius = temperature => (temperature - 32) * (5/9);