export const getRandomInt = (min = 1, max = 10) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

/**
 * Duration has a 30% chance of being a lot
 */
export const getDuration = () => {
  const start = getRandomInt();
  if(start <= 7) return getRandomInt(1, 5);
  return getRandomInt(15, 20)
}