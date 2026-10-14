import bladeWard1e from './1e/1e';
import bladeWard2e from './2e/2e';
import bladeWard3e from './3e/3e';
import bladeWard35e from './3-5e/3-5e';
import bladeWard4e from './4e/4e';
import bladeWard5e from './5e/5e';
import bladeWard55e from './5-5e/5-5e';

export { bladeWard1e, bladeWard2e, bladeWard3e, bladeWard35e, bladeWard4e, bladeWard5e, bladeWard55e };
export const bladeWardEditions = { '1e': bladeWard1e, '2e': bladeWard2e, '3e': bladeWard3e, '3-5e': bladeWard35e, '4e': bladeWard4e, '5e': bladeWard5e, '5-5e': bladeWard55e } as const;
export default bladeWardEditions;
