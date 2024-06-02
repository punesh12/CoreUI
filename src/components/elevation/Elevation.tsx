import { css } from 'styled-components';

/**
 * Returns the CSS box-shadow style for the specified elevation level.
 * If the specified level is not found, returns the base elevation style.
 *
 * @param level - The elevation level to retrieve the CSS style for.
 * @returns The CSS box-shadow style for the specified elevation level, or the base style if not found.
 */
export const Elevation = (level: keyof typeof elevations | string) => {
  return elevations[level as keyof typeof elevations] ?? elevations.base;
};

export const elevations = {
  inset: css`
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  `,
  base: css`
    box-shadow: none;
  `,
  level1: css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `,
  level2: css`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `,
  level3: css`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  `,
  level4: css`
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  `,
  level5: css`
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `,
  level6: css`
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3), 0 20px 16px rgba(0, 0, 0, 0.22);
  `,
};
