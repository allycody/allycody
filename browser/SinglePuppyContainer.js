import {connect} from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = ({selectedPuppy}) => ({
	selectedPuppy
})

const mapDispatchToProps = dispatch => ({
	
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SinglePuppy)