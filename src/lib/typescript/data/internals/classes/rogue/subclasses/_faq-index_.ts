import { arcaneTricksterFaq } from './arcane-trickster/faq/_index_';
import { assassinFaq } from './assassin/faq/_index_';
import { inquisitiveFaq } from './inquisitive/faq/_index_';
import { mastermindFaq } from './mastermind/faq/_index_';
import { phantomFaq } from './phantom/faq/_index_';
import { scoutFaq } from './scout/faq/_index_';
import { soulknifeFaq } from './soulknife/faq/_index_';
import { swashbucklerFaq } from './swashbuckler/faq/_index_';
import { thiefFaq } from './thief/faq/_index_';

export const rogueSubclassFaqGroups = [
	arcaneTricksterFaq,
	assassinFaq,
	inquisitiveFaq,
	mastermindFaq,
	phantomFaq,
	scoutFaq,
	soulknifeFaq,
	swashbucklerFaq,
	thiefFaq
] as const;
