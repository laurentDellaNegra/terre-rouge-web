import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

export const fullConfig = resolveConfig(tailwindConfig as any)

/**
 * fullConfig.theme?.screens['sm'] return a string like '1234px'
 * so we remove px and convert to number
 *
 * @param breakpoint eg: sm | md | lg | xl
 * @returns
 */
export const getBreakpoint = (breakpoint: string) =>
  Number((fullConfig.theme?.screens as any)[breakpoint].split('px')[0])
