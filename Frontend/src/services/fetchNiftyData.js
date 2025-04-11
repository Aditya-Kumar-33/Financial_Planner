const API_KEY = '4f0eac2d6f06422e80b9314c6119e265';
const SYMBOL = '^NSEI';

export async function fetchNiftyData(timeframe) {
  let interval = '1day';
  let outputsize = 30;

  switch (timeframe) {
    case '1M':
      interval = '1day';
      outputsize = 30;
      break;
    case '1Y':
      interval = '1week';
      outputsize = 52;
      break;
    case '5Y':
      interval = '1month';
      outputsize = 60;
      break;
  }

  const url = `https://api.twelvedata.com/time_series?symbol=INFY:NSE&interval=${interval}&outputsize=${outputsize}&apikey=${API_KEY}`;

  const res = await fetch(url);
  const json = await res.json();

  if (json.status === 'error') {
    console.error(json.message);
    return [];
  }

  return json.values.reverse().map((item) => ({
    date: item.datetime,
    value: parseFloat(item.close),
  }));
}
