export const createRootClassNameFromArray = (classNameArray: Array<string>): string => {
  return classNameArray.filter(Boolean).join(' ');
};
