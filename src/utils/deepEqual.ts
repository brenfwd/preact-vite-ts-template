export function deepEqual(a: unknown, b: unknown, sortArrays = false, _depth = 0): boolean {
  if (_depth > 100) {
    throw new RangeError("Sanity depth exceeded");
  }

  if (a === b) {
    return true;
  }

  const aType = typeof a;
  const bType = typeof b;

  if (aType !== bType) {
    return false;
  }

  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);

  if (aIsArray !== bIsArray) {
    return false;
  }

  // Check for null/undefined on either side
  if (a === null || b === null || a === undefined || b === undefined) {
    return false;
  }

  // Compare arrays
  if (aIsArray && bIsArray) {
    const aLength = a.length;
    const bLength = b.length;

    if (aLength !== bLength) {
      return false;
    }

    const aSorted = sortArrays ? a.sort() : a;
    const bSorted = sortArrays ? b.sort() : b;

    for (let i = 0; i < aLength; i++) {
      if (!deepEqual(aSorted[i], bSorted[i], sortArrays, _depth + 1)) {
        return false;
      }
    }

    return true;
  }

  // Compare NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  // Compare objects
  if (aType === "object") {
    const aKeys = Object.keys(a as object);
    const bKeys = Object.keys(b as object);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (const key of aKeys) {
      if (!deepEqual((a as any)[key], (b as any)[key], sortArrays, _depth + 1)) {
        return false;
      }
    }

    return true;
  }

  return false;
}
