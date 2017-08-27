const umbra = 'rgba(0, 0, 0, 0.14)'
const penumbra = 'rgba(0, 0, 0, 0.12)'
const ambient = 'rgba(0, 0, 0, 0.2)'

export default {
  0: {boxShadow: 'none'},
  1: {boxShadow: `0 0 2px 0 ${umbra}, 0 2px 2px 0 ${penumbra}, 0 1px 3px 0 ${ambient}`},
  2: {boxShadow: `0 0 4px 0 ${umbra}, 0 3px 4px 0 ${penumbra}, 0 1px 5px 0 ${ambient}`},
  3: {boxShadow: `0 3px 3px 0 ${umbra}, 0 3px 4px 0 ${penumbra}, 0 1px 8px 0 ${ambient}`},
  4: {boxShadow: `0 2px 4px 0 ${umbra}, 0 4px 5px 0 ${penumbra}, 0 1px 10px 0 ${ambient}`},
  6: {boxShadow: `0 6px 10px 0 ${umbra}, 0 1px 18px 0 ${penumbra}, 0 3px 5px 0 ${ambient}`},
  8: {boxShadow: `0 8px 10px 1px ${umbra}, 0 3px 14px 3px ${penumbra}, 0 4px 15px 0 ${ambient}`},
  9: {boxShadow: `0 9px 12px 1px ${umbra}, 0 3px 16px 2px ${penumbra}, 0 5px 6px 0 ${ambient}`},
  12: {boxShadow: `0 12px 17px 2px ${umbra}, 0 5px 22px 4px ${penumbra}, 0 7px 8px 0 ${ambient}`},
  16: {boxShadow: `0 16px 24px 2px ${umbra}, 0 6px 30px 5px ${penumbra}, 0 8px 10px 0 ${ambient}`},
  24: {boxShadow: `0 24px 38px 3px ${umbra}, 0 9px 46px 8px ${penumbra}, 0 11px 15px 0 ${ambient}`},
}
