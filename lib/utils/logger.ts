import { blue, green, white, yellow } from 'ansis';

const betterLogColors = {
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',

  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  bgGray: '\x1b[100m',
};

type ArgSet = [...[keyof typeof betterLogColors, ...any]];

export function ColorLog(...argSets: [string] | ArgSet[]) {
  if (!Array.isArray(argSets[0]))
    return console.log(
      betterLogColors.bgGreen +
        '>>' +
        betterLogColors.bgBlack +
        argSets[0] +
        '\x1b[0m',
    );

  console.log(
    ...argSets.map(
      ([color, ...oput]) =>
        betterLogColors[color as keyof typeof betterLogColors] +
        oput.map(t => {
          if (
            !t ||
            ['bigint', 'boolean', 'number', 'string'].includes(typeof t)
          ) {
            return t;
          } else {
            return JSON.stringify(t, undefined, 1);
          }
        }) +
        '\x1b[0m',
    ),
  );
}

export const logger = {
  info: (...message: any[]) => ColorLog(['blue', ...message]),
  success: (...message: any[]) => ColorLog(['green', ...message]),
  warn: (...message: any[]) => ColorLog(['yellow', ...message]),
  error: (...message: any[]) => ColorLog(['red', ...message]),
};
