const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {

  if (typeof sampleActivity !== "string") return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const ratio = Math.log(MODERN_ACTIVITY / sampleActivity);
  const result = Math.ceil(ratio / k);

  if (
    isNaN(result) ||
    result < 0 ||
    !Number.isFinite(result)
  ) {
    return false;
  }

  return result;
}

module.exports = dateSample;