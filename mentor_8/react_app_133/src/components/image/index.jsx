/* eslint-disable react/prop-types */

const Image = ({img}) => {
  return (
    <img width={300} height={300} src={img?.url} alt="" />
  )
}

export default Image