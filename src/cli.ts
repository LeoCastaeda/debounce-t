import { debounce } from './debounce';
import { Command } from 'commander';

const program = new Command();

function mockFunction(...args: any[]) {
  console.log('Función llamada con argumentos:', ...args);
}

const debouncedFunction = debounce(mockFunction, 2000);

program
  .version('1.0.0')
  .description('CLI para comprobar la funcionalidad de debounce')
  .option('-a, --args <args...>', 'Argumentos para pasar a la función debounced', (val) => val.split(','), [])
  .action((options) => {
    debouncedFunction(...options.args);
    console.log('Llamada a la función debounced realizada. Espera 2 segundos para ver el resultado.');
  });

program.parse(process.argv);
