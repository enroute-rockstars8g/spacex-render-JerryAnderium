export const getDragons = async () => {
  try {
    const response = await fetch('https://api.spacex.land/rest/dragons')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  };
};

export const getRockets = async () => {
  try {
    const response = await fetch('https://api.spacex.land/rest/rockets')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  };
};

export const getShips = async () => {
  try {
    const response = await fetch('https://api.spacex.land/rest/ships')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  };
};
