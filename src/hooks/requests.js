const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response =  await fetch(`${API_URL}/planets`);
  return await response.json()
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.'
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber )
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(launch)
    })
  } catch(err) {
    //return an object with an ok status of false incase of network failures and may server cors issues, instead of leaving the request hanging.
    return {
      ok: false, 
    }
  }
  
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};