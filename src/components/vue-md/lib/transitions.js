export const durations = {
  mobile: {
    standard: '300ms',
    long: '375ms',
    entering: '225ms',
    leaving: '195ms',
  },
  tablet: {
    standard: '390ms',
    long: '487.5ms',
    entering: '292.5ms',
    leaving: '253.5ms',
  },
  wearable: {
    standard: '210ms',
    long: '262.5ms',
    entering: '157.5ms',
    leaving: '136.5ms',
  },
  desktop: {
    standard: '180ms',
    long: '200ms',
    entering: '160ms',
    leaving: '150ms',
  },
}

export const curves = {
  standard: {
    transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  deceleration: {
    transitionTimingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  acceleration: {
    transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 1, 1)',
  },
  sharp: {
    transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.6, 1',
  },
}
