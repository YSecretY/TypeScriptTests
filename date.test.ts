import Age from './date';
import { set, reset } from 'mockdate';

describe('Age', () => {
    const date = '2022-12-29';
    const timestamp = new Date(date).getTime();
    let myAge: Age;


    beforeEach(() => {
        set(date);
    });


    it('should use timestamp as a birth date', () => {
        const myAge = new Age(timestamp);
        expect(myAge).toBeTruthy();
    });

    it('should not accept a future timestamp', () => {
        expect(() => {new Age(timestamp + 1)}).toThrow(Error);
    });

    it('should to convert full years to string', () =>  {
        const myAgeAfterCurrentDate = new Age(new Date('2022-12-29').getTime());
        expect(myAgeAfterCurrentDate.toString()).toEqual('0');
        const myAgeBeforeCurrentDate = new Age(new Date('2022-12-29').getTime());
        expect(myAgeBeforeCurrentDate.toString()).toEqual('0');
    });

    afterEach(() => {
        reset();
    });
});