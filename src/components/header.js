import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/variables.scss"
import Logo from "../assets/restorative-fitness-logo.svg"

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1
				style={{
					margin: `0 auto`,
					display: `flex`,
					justifyContent: `center`,
				}}
			>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
						textAlign: `center`,
					}}
				>
					{/* {siteTitle} */}
					<Logo
						style={{
							margin: `0 auto`,
							height: `auto`,
							width: `50%`,
						}}
					/>
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
