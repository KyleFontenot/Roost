import React, {useRef} from 'react'
import IconClipboard from "../images/svg/clipboard.svg"


const CopyToClipboard = ({color}) => {
	let copyIndicator = useRef(null)

	return (
		<button
			className="clipboardButton"
			onClick={() => {
				navigator.clipboard.writeText(color)
				copyIndicator.current.style.opacity = "1"
				setTimeout(() => {
					copyIndicator.current.style.opacity = "0"
				}, 1500)
			}}
		>

		<IconClipboard/>

			<div className="clipboardConfirmation" ref={copyIndicator}>
				Copied!
			</div>
		</button>

	)
}

export default CopyToClipboard;
