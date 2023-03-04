/**
 * Краткая замена cloneDeep из lodash.
 */
export const cloneDeep = (obj: any): any => JSON.parse(JSON.stringify(obj));
