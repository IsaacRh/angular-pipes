import { CustomSecurityDomPipe } from './custom-security-dom.pipe';

describe('CustomSecurityDomPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomSecurityDomPipe();
    expect(pipe).toBeTruthy();
  });
});
