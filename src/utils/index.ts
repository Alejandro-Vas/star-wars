class Helpers {
  static isPropertyValid(property:string) {
    const notValidList = ['n/a', 'unknown'];

    return property && !notValidList.includes(property);
  }
}

export default Helpers;
