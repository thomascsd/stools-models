import { BaseModel } from '../src/BaseModel';

describe('test base model', () => {
  it('id 是否有值', () => {
    const model = new BaseModel();

    model.id = 'abc';

    expect(model.id).toEqual('abc');
  });
});
