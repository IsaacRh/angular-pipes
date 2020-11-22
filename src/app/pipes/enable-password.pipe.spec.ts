import { EnablePasswordPipe } from './enable-password.pipe';

describe('EnablePasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new EnablePasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
