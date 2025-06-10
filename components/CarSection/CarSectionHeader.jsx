import PropTypes from 'prop-types'

const CarSectionHeader = ({ total }) => (
  <div className="search-filter-head">
    <h3>There are {total} vehicles</h3>
  </div>
)

CarSectionHeader.propTypes = {
  total: PropTypes.number.isRequired,
}

export default CarSectionHeader
