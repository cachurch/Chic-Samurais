import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isAdmin} = props
  const orders = props.orders || []
  return (
    <div>
      {isAdmin ? (
        <div>
          <h3>Welcome, {email}! </h3>
          <h4>
            <em>
              Thank you for helping to make this site as beautiful as one of our
              many *mock* masterpieces!
            </em>
          </h4>
          <Link to="/admin/products">Edit Products</Link>
          <br />
          <br />
          <Link to="/admin/users">View Users</Link>
        </div>
      ) : (
        <div>
          <h3>Welcome back, {email}!</h3>
          <h4>
            <i>
              May your shopping experience be as fine as the art in our
              inventory . . .
            </i>
          </h4>
          <hr />
          <h3 className="siteHeader">🖼 Previously Procured Pieces 🖼</h3>
          <br />
          {orders.map(order => (
            <div key={order.id}>
              <h5>
                Date:
                {order.updatedAt.toLocaleString().slice(0, 10)} | Name:
                {order.name} | Order Address: {order.address} | Amount:
                {order.orderTotal} | Items: {order.totalQty}
              </h5>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isAdmin: state.user.isAdmin,
    orders: state.user.orders
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
