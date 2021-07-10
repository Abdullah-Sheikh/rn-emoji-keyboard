export type EmojiType = {
  emoji: string;
  name: string;
  slug: string;
  skin_tone_support: boolean;
  unicode_version: string;
  emoji_version: string;
};

export type CategoryTypes =
  | 'Smileys & Emotion'
  | 'People & Body'
  | 'Animals & Nature'
  | 'Food & Drink'
  | 'Travel & Places'
  | 'Activities'
  | 'Objects'
  | 'Symbols'
  | 'Flags';

export const CATEGORIES: CategoryTypes[] = [
  'Smileys & Emotion',
  'People & Body',
  'Animals & Nature',
  'Food & Drink',
  'Travel & Places',
  'Activities',
  'Objects',
  'Symbols',
  'Flags',
];

export type CategoryNavigationItem = {
  icon: string;
  category: CategoryTypes;
};

export const CATEGORIES_NAVIGATION: CategoryNavigationItem[] = [
  { icon: 'Smile', category: 'Smileys & Emotion' },
  { icon: 'Users', category: 'People & Body' },
  { icon: 'Trees', category: 'Animals & Nature' },
  { icon: 'Pizza', category: 'Food & Drink' },
  { icon: 'Plane', category: 'Travel & Places' },
  { icon: 'Football', category: 'Activities' },
  { icon: 'Lightbulb', category: 'Objects' },
  { icon: 'Ban', category: 'Symbols' },
  { icon: 'Flag', category: 'Flags' },
];

export type EmojisByCategory = {
  title: CategoryTypes;
  data: EmojiType[];
};
