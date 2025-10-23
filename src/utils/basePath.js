const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const isAbsoluteUrl = (value = '') =>
  value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')

export const getBasePath = () => basePath

export const withBasePath = (value) => {
  if (!value) return value
  if (isAbsoluteUrl(value)) return value
  if (basePath && value.startsWith(basePath)) return value
  return `${basePath}${value}`
}
