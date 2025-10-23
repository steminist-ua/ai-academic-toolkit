import { withBasePath } from '../utils/basePath'

const ImageWithBasePath = ({ src, ...props }) => {
  const resolvedSrc = src ? withBasePath(src) : src
  return <img src={resolvedSrc} {...props} />
}

export default ImageWithBasePath
