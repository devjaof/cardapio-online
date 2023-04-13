export function itemEmoji(type: string) {
  switch(type.toLowerCase()) {
    case 'burger': 
      return '🍔';
    case 'pizza':
      return '🍕';
    case 'drink':
      return '🍾';
    default:
      return '🔍'
  }
}