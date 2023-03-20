class Helpers {
  static isPropertyValid(property:string) {
    const notValidList = ['n/a', 'unknown', 'wh/ra', 'huwhorwhooohwh'];

    return !!property && !notValidList.includes(property);
  }
}

export default Helpers;
