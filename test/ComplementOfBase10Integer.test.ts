import {bitwiseComplement} from '../src/ComplementOfBase10Integer'

describe('ComplementOfBase10Integer', () => {

    it('Example 1', () => {
        expect(bitwiseComplement(5)).toEqual(2)
        // Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
        
    })

    it('Example 2', () => {
        expect(bitwiseComplement(7)).toEqual(0)
        // Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
    })

    it('Example 3', () => {
        expect(bitwiseComplement(10)).toEqual(5)
        // Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
    })

})