const { debounce } = require('../debounce');

jest.useFakeTimers();

describe('debounce', () => {
  it('debe retrasar la llamada de la función', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
