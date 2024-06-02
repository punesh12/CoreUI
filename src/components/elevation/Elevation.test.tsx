import { Elevation, elevations } from './Elevation';

describe('Elevation', () => {
  // returns the correct CSS style for 'inset' elevation level
  it('should return the correct CSS style for "inset" elevation level', () => {
    const result = Elevation('inset');
    expect(result).toEqual(elevations.inset);
  });

  // returns the correct CSS style for 'base' elevation level
  it('should return the correct CSS style for "base" elevation level', () => {
    const result = Elevation('base');
    expect(result).toEqual(elevations.base);
  });

  // returns the correct CSS style for 'level1' elevation level
  it('should return the correct CSS style for "level1" elevation level', () => {
    const result = Elevation('level1');
    expect(result).toEqual(elevations.level1);
  });

  // returns the correct CSS style for 'level2' elevation level
  it('should return the correct CSS style for "level2" elevation level', () => {
    const result = Elevation('level2');
    expect(result).toEqual(elevations.level2);
  });

  // returns the correct CSS style for 'level3' elevation level
  it('should return the correct CSS style for "level3" elevation level', () => {
    const result = Elevation('level3');
    expect(result).toEqual(elevations.level3);
  });

  // returns the correct CSS style for 'level4' elevation level
  it('should return the correct CSS style for "level4" elevation level', () => {
    const result = Elevation('level4');
    expect(result).toEqual(elevations.level4);
  });

  // returns the base style when an invalid elevation level is provided
  it('should return the base style when an invalid elevation level is provided', () => {
    const result = Elevation('invalidLevel');
    expect(result).toEqual(elevations.base);
  });

  // returns the base style when an empty string is provided as the level
  it('should return the base style when an empty string is provided as the level', () => {
    const result = Elevation('');
    expect(result).toEqual(elevations.base);
  });

  // returns the base style when null is provided as the level
  it('should return the base style when null is provided as the level', () => {
    const result = Elevation(null as any);
    expect(result).toEqual(elevations.base);
  });

  // returns the base style when undefined is provided as the level
  it('should return the base style when undefined is provided as the level', () => {
    const result = Elevation(undefined as any);
    expect(result).toEqual(elevations.base);
  });

  // returns the correct CSS style for 'level5' elevation level
  it('should return the correct CSS style for "level5" elevation level', () => {
    const result = Elevation('level5');
    expect(result).toEqual(elevations.level5);
  });

  // returns the correct CSS style for 'level6' elevation level
  it('should return the correct CSS style for "level6" elevation level', () => {
    const result = Elevation('level6');
    expect(result).toEqual(elevations.level6);
  });
});
