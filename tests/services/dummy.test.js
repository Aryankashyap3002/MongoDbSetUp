import { execute} from '../../src/services/dummy-service.js'
import { helper } from '../../src/services/helper-service.js';
jest.mock('../../src/services/helper-service.js');

test('result is true and Leaarning JS', () => {
    helper.mockReturnValue(true)
    const result = execute()
    expect(result).toBe('Learning JS');
})   

test('result is true and Leaarning ReactJS', () => {
    helper.mockReturnValue(false)
    const result = execute()
    expect(result).toBe('Learning ReactJS');
})   