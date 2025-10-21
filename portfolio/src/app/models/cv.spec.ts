import { Cv } from './cv';

describe('Cv', () => {
  it('should create an instance', () => {
    expect(new Cv('Testfirma', 2022)).toBeTruthy();
  });
});
