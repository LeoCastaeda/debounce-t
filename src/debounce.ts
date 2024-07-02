export function debounce(cb: (...args: any[]) => void, delay = 1000) {
    let timeout: NodeJS.Timeout;
  
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  